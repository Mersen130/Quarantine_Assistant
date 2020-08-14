import React from "react";
import "../../components.css";
import Media from "./media";
import { uid } from "react-uid";
import DropDown from "./dropdown";
import Sidebar from "../SideNavBar/sidebar.js";
import Pagination from "./pagination.js";
import serverCall from "./serverCall"
class QA extends React.Component {
  constructor(props){
    super(props);
    this.props.history.push("/QA");
    const loadPosts = serverCall.loadPosts.bind(this);
    this.state = {currShown: [0, 10],
      postsList: [],
      notes: [
        'Your post "aba aba..." has been deleted.',
        'Your post "aba aba..." has been deleted.',
      ],
    numNotes: 2,}
    loadPosts();

    // this.state = {
    //   /*user = this.props.user*/
    //   userInfo: info[1],
    //   postsList: [
    //     {
    //       posterId: [posterId],
    //       posterType: ["user", "doctor"]
    //       _id: postId,
    //       names: ["user1", "user2"],
    //       contents: ["Aba aba aba?1 #aba", "Aba aba aba aba aba. #aba"],
    //       times: [new Date(), new Date()],
    //       likes: [10, 2],
    //       tags: ["#aba", "#aba"],
    //     }],
    //   currShown: [0, 10],
    //   notes: [
    //     'Your post "aba aba..." has been deleted.',
    //     'Your post "aba aba..." has been deleted.',
    //   ],
    //   numNotes: 2,
    // };
  }


  render() {
    {
      console.log("rerender", this.state);
      if (!this.state.postsList){
        return <div></div>
      }
    return (
      <div>
        <Sidebar
          title={"Q&A"}
          notes={this.state.notes}
          numNotes={this.state.numNotes}
        />
        <div>
        <div className="jumbotron jumbotron-fluid" id="jumbotronQa">
          <div className="containerQA">
            <h1 className="title titleQa">Quanrantine Assistant Communities</h1>
            <p>
              Find answers, ask questions, and connect with our community of the
              most authoritative doctors around the world.
            </p>
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
                id="searchBtn"
                className="btn btn-primary"
                onClick={this.search}
              >
                Search !
              </button>
            </form>
            <div id="scrollSign"><img src={require("../../lib/qa/scroll.png")}/>
              Scroll Down</div>
          </div>
        </div>
        </div>
        <div id="bgwhite">
          <div>
            <form action="#" className="postForm">
              <img
                src={require("../../lib/profilephotos/user1.png")}
                className="profilephotoPost"
                onClick={function() {
                  window.location.href = 'user1';
             }}
              />

              <div className="form-group form-groupQab">
                <input
                  className="form-control"
                  id="post"
                  placeholder="Make a new post here..."
                  name="email"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                id="postBtn"
                onClick={this.post}
              >
                Post ! !{" "}
              </button>
              <br />
              <div className="form-group form-groupQab tagDiv">
                <input
                  className="form-control"
                  id="tags"
                  placeholder="#Tags"
                  name="pswd"
                />
              </div>
              <div className="anonnCheck">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />{" "}
                  Anonnymous to others
                </label>
              </div>
            </form>
          </div>
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
                <Media
                  userInfo={this.state.userInfo}
                  key={uid(post)}
                  postsList={post}
                  handleLike={(i, amt) => this.like(i, mediaNum, amt)}
                  handleReply={(name, content) =>
                    this.handleReply(mediaNum, name, content)
                  }
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
  }

  search = (e) => {
    const t = document.getElementById("searchedTag").value;
    e.preventDefault();
    const posts = document.getElementsByClassName("mt-3");
    // console.log(posts)
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
    // console.log(this.state.currShown)
    for (let i = this.state.currShown[0]; i < this.state.currShown[1]; i++) {
        for (let j = 0; j < this.state.postsList[i].tags.length; j++){
            if (this.state.postsList[i].tags[j].includes(t)) {
                // console.log(posts[i])
                posts[i].style.visibility = "visible";
            }
        }
    }
  }
  
  post = (e) => {
    e.preventDefault();
    const post = document.querySelector("#post");
    const regExp = / +/;
    // console.log("post value:", post.value)
    if (post.value === "" || regExp.test(post.value)) {
      alert("Can't send empty post");
      return;
    }
    const tags = document.querySelector("#tags");
    const data = {
      posterId: [this.state.userInfo.userId],
      posterType: [this.state.userInfo.userType],
      names: [this.state.userInfo.userName],
      contents: [post.value + " " + tags.value],
      times: [new Date()],
      likes: [0],
      tags: [tags.value],
    }

    // server call that sends data
    const sendPost = serverCall.sendPost.bind(this);
    sendPost(data);
  }

  backTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  like = (i, j, amt) => {
    // j is the postIndex, i is the contentIndex
    const postsListB = this.state.postsList;
    postsListB[j].likes[i] += amt;
    // todo: a server call that sends data
    const sendLike = serverCall.sendLike.bind(this);
    // alert(j);alert(i);alert(amt);
    sendLike(postsListB, i, j, amt);
  };

  handleReply = (mediaId, name, content) => {
    const newList = this.state.postsList;

    newList[mediaId].posterId.push(this.state.userInfo.userId);
    newList[mediaId].posterType.push(this.state.userInfo.userType);
    newList[mediaId].names.push(name);
    newList[mediaId].contents.push(content);
    newList[mediaId].times.push(new Date());
    newList[mediaId].likes.push(0);
    newList[mediaId].tags.push("");
    
    // console.log(newList[mediaId])
    // a server call that sends data
    const sendReply = serverCall.sendReply.bind(this);
    sendReply(newList, mediaId);
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
    const postsListB = this.state.postsList;
    if (e == "Newest") {
      // time based
      this.setState({ postsList: this.selectionSort(postsListB, "Newest") });
    } else if (e == "Top rated") {
      // like based
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
      let end = this.state.currShown[1] + 10;
      if (end > this.state.postsList.length){
        end = this.state.postsList.length
      }
      this.setState({
        currShown: [this.state.currShown[0] + 10, end],
      });
    } else {
      let end = page * 10;
      if (end > this.state.postsList.length){
        end = this.state.postsList.length
      }
      this.setState({ currShown: [(page - 1) * 10, end] });
    }
  };

  handleRemove = (i, mediaNum, e) => {
    e.preventDefault();
    const postsListB = this.state.postsList;
    // alert(i); alert(mediaNum);
    postsListB[mediaNum].contents[i] = "[content deleted by admin/author]";
    if (i === 0) { 
      // a server call that sends data
      const postId = postsListB[mediaNum]._id;
      postsListB.splice(mediaNum, 1);
      const removePost = serverCall.removePost.bind(this);
      removePost(postId, postsListB);
    } else{
      const removeReply = serverCall.removeReply.bind(this);
      removeReply(postsListB[mediaNum]._id, i, postsListB);
    }
  };

  pushNote = (v) => {
    const noteB = this.state.notes;
    const numB = this.state.numNotes + 1;
    noteB.splice(0, 0, v);
    this.setState({ notes: noteB });
    this.setState({ numNotes: numB });
  };
}

export default QA;
