import React from "react";
import "../../components.css";
import MediaAdmin from "./mediaAdmin";
import { uid } from "react-uid";
import DropDown from "./dropdown";
import Sidebar from "../SideNavBar/sidebar.js";
import Sidebaradmin from "../SideNavBar/sidebarAdmin.js";
import Pagination from "./pagination.js";
import serverCall from "./serverCall";

class QAAdmin extends React.Component {
  constructor(props){
    super(props);
    this.props.history.push("/QAAdmin");
    const loadPosts = serverCall.loadPosts.bind(this);
    const info = loadPosts();
    this.state = {
      userInfo: info[1],
      postsList: info[0],
      currShown: [0, 10],
    }
  }

  render() {
    return (
      <div>
        <Sidebaradmin title={"Q&A"} />
        <div className="jumbotron jumbotron-fluid" id="jumbotronQaadmin">
          <div className="containerQA">
            <h1 className="title titleQa">Welcome, Admin</h1>
            <p>Please delete inappropriate posts.</p>
            <form className="searchGroup searchGroupQa">
              <div className="form-group form-groupQa">
                <input
                  type="text"
                  id="searchedTag"
                  className="form-control"
                  placeholder="Search by tags..."
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                id="searchBtn"
                onClick={this.search}
              >
                Search !
              </button>
            </form>
            <div id="scrollSign"><img src={require("../../lib/qa/scroll.png")}/>
              Scroll Down</div>
          </div>
        </div>
        <div id="bgwhite">
          <br />
          <hr />
          <br />
          <br />
          <br />
          <div>
            <span id="dropDown">
              <DropDown handleOrder={this.handleOrder} />
            </span>
            {this.state.postsList
              .slice(this.state.currShown[0], this.state.currShown[1])
              .map((post, mediaNum) => (
                <MediaAdmin
                  key={uid(post)}
                  postsList={post}
                  handleRemove={(i, e) => this.handleRemove(i, mediaNum, e)}
                  mediaId={mediaNum}
                />
              ))}
          </div>
          <Pagination
            len={Math.ceil(this.state.postsList.length / 10)}
            handleClick={this.handlePage}
          />
          <button
            type="button"
            onClick={this.backTop}
            id="backToTop"
            className="btn btn-primary btn-block"
          >
            Back to top
          </button>
        </div>
      </div>
    );
  }

  search = (e) => {
    const t = document.getElementById("searchedTag").value;
    e.preventDefault();
    const posts = document.getElementsByClassName("mt-3");
    const regExp = / +/;
    if (t === "" || regExp.test(t)) {
      for (let i = 0; i < posts.length; i++) {
        posts[i].style.visibility = "visible";
      }
      return;
    }
    for (let i = 0; i < posts.length; i++) {
      posts[i].style.visibility = "collapse";
    }
    for (let i = 0; i < this.state.postsList.length; i++) {
      for (let j = 0; j < this.state.postsList[i].tags.length; j++) {
        if (this.state.postsList[i].tags[j].includes(t)) {
          posts[i].style.visibility = "visible";
        }
      }
    }
  };

  post = (e) => {
    e.preventDefault();
    const post = document.querySelector("#post");
    const regExp = / +/;
    if (post.value === "" || regExp.test(post.value)) {
      alert("Can't send empty post");
      return;
    }
    const tags = document.querySelector("#tags");
    console.log(post.value);
    this.state.postsList.splice(0, 0, {
      names: ["user1"],
      contents: [post.value + " " + tags.value],
      times: [new Date()],
      likes: [0],
      tags: [tags.value],
    });
    const newList = this.state.postsList;
    this.setState({ postsList: newList });
    // todo: a server call that sends data
  };

  backTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  swap = (items, firstIndex, secondIndex) => {
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  };

  selectionSort = (items, order) => {
    let len = items.length,
      max;

    for (let i = 0; i < len; i++) {
      //set maximum to this position
      max = i;

      //check the rest of the array to see if anything is smaller

      if (order == "Newest") {
        // time based
        for (let j = i + 1; j < len; j++) {
          if (items[j].times[0] > items[max].times[0]) {
            max = j;
          }
        }
      } else if (order == "Top") {
        // like based
        for (let j = i + 1; j < len; j++) {
          if (items[j].likes[0] > items[max].likes[0]) {
            max = j;
          }
        }
      } else {
        // reply based
        for (let j = i + 1; j < len; j++) {
          if (items[j].contents.length > items[max].contents.length) {
            max = j;
          }
        }
      }

      //if the maximum isn't in the position, swap it
      if (i != max) {
        this.swap(items, i, max);
      }
    }

    return items;
  };

  handleOrder = (e) => {
    console.log(e);
    const postsListB = this.state.postsList;
    if (e == "Newest") {
      // time based
      this.setState({ postsList: this.selectionSort(postsListB, "Newest") });
    } else if (e == "Top rated") {
      // like based
      console.log(this.selectionSort(postsListB, "Top"));
      this.setState({ postsList: this.selectionSort(postsListB, "Top") });
    } else {
      // reply based
      this.setState({ postsList: this.selectionSort(postsListB, "Hottest") });
    }
    return;
  };

  handlePage = (mode, page) => {
    if (mode === "next") {
      if (this.state.currShown[1] >= this.state.postsList.length) return;
      this.setState({
        currShown: [this.state.currShown[0] + 10, this.state.currShown[1] + 10],
      });
    } else {
      this.setState({ currShown: [(page - 1) * 10, page * 10] });
    }
  };

  handleRemove = (i, mediaNum, e) => {
    e.preventDefault();
    const postsListB = this.state.postsList;
    postsListB[mediaNum].contents[i] = "[content deleted by admin/author]";
    if (i === 0) { 
      // a server call that sends data
      postsListB.splice(mediaNum, 1);
      const removePost = serverCall.removePost.bind(this);
      removePost(postsListB[mediaNum]._id, postsListB);
    } else{
      const removeReply = serverCall.removeReply.bind(this);
      removeReply(postsListB[mediaNum]._id, i, postsListB);
    }
  };
}

export default QAAdmin;
