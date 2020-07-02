
import React from 'react';
import '../components.css'
import Media from './media';
import { uid } from "react-uid";
import DropDown from './dropdown';
import Sidebar from '../SideNavBar/sidebar.js';
import Pagination from './pagination.js';


class QA extends React.Component {
    state = {
        /*user = this.props.user*/
        postsList: [{ names: ["user1", "user2"], contents: ["Aba aba aba?1 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [10, 2], tags: ["#aba", "#aba"] },
        { names: ["user2", "user1"], contents: ["Aba aba aba?2 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user1", "user2"], contents: ["Aba aba aba?3 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user2", "user1"], contents: ["Aba aba aba?4 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user1", "user2"], contents: ["Aba aba aba?5 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user2", "user1"], contents: ["Aba aba aba?6 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user1", "user2"], contents: ["Aba aba aba?7 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user2", "user1"], contents: ["Aba aba aba?8 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user1", "user2"], contents: ["Aba aba aba?9 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user2", "user1"], contents: ["Aba aba aba?10 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user1", "user2"], contents: ["Aba aba aba?11 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user2", "user1"], contents: ["Aba aba aba?12 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user1", "user2"], contents: ["Aba aba aba?13 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user2", "user1"], contents: ["Aba aba aba?14 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user1", "user2"], contents: ["Aba aba aba?15 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] },
        { names: ["user2", "user1"], contents: ["Aba aba aba?16 #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 659], tags: ["#aba", "#aba"] }],
        currShown: [0, 10]

    }

    render() {
        return (
            <div>
                <Sidebar title={"Q&A"}/>
                <div className="jumbotron jumbotronQa jumbotron-fluid">
                    <div className="container">
                        <h1 className="title titleQa">Quanrantine Assistant Communities</h1>
                        <p>Find answers, ask questions, and connect with our community of the most authoritative doctors around the world.</p>
                        <form className="searchGroup searchGroupQa">
                            <div className="form-group form-groupQa">
                                <input type="text" id="searchedTag" className="form-control" placeholder="Search by tags..." />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.search}>Search !</button>
                        </form>
                    </div>
                </div>

                <div>
                    <form action="#" className="postForm">
                        <img src={require("../lib/profilephotos/user1.png")} className="profilephotoPost" />

                        <div className="form-group form-groupQa">
                            <input className="form-control" id="post" placeholder="Make a new post here..." name="email" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.post}>Post ! !  </button><br />
                        <div className="form-group form-groupQa tagDiv">
                            <input className="form-control" id="tags" placeholder="#Tags" name="pswd" />
                        </div>
                        <div className="anonnCheck">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" /> Anonnymous to others
                            </label>
                        </div>
                    </form>
                </div>
                <br /><hr /><br /><br /><br />
                <div>
                    <span id="dropDown"><DropDown handleOrder={this.handleOrder}/></span>
                    {this.state.postsList.slice(this.state.currShown[0], this.state.currShown[1]).map((post, mediaNum) => (
                    <Media key={uid(post)} postsList={post} handleLike={(i, amt) => this.like(i, mediaNum, amt)} handleReply={(name, content) => this.handleReply(mediaNum, name, content)} handleRemove={(e)=>this.handleRemove(mediaNum, e)} mediaId={mediaNum} />
                     ))}
                </div>
                <Pagination len={Math.ceil(this.state.postsList.length/10)} handleClick={this.handlePage}/>
                <button type="button" onClick={this.backTop} className="btn btn-primary btn-block">Back to top</button>
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
            for (let j = 0; j < this.state.postsList[i].tags.length; j++){
                if (this.state.postsList[i].tags[j].includes(t)) {
                    posts[i].style.visibility = "visible";
                }
            }
        }
    }

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
        this.state.postsList.splice(0, 0, { names: ["user1"], contents: [post.value + " " + tags.value], times: [new Date()], likes: [0], tags: [tags.value] });
        const newList = this.state.postsList;
        this.setState({ postsList: newList })
        // todo: a server call that sends data
    }

    backTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    like = (i, j, amt) => {
        const postsListB = this.state.postsList;
        postsListB[j].likes[i] += amt;
        this.setState({ postsList: postsListB });
    }

    handleReply = (mediaId, name, content) => {
        const newList = this.state.postsList;
        newList[mediaId].names.push(name);
        newList[mediaId].contents.push(content);
        newList[mediaId].times.push(new Date());
        newList[mediaId].likes.push(0);
        newList[mediaId].tags.push("");
        this.setState({postsList: newList});
    }

    swap = (items, firstIndex, secondIndex)=>{
        let temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    selectionSort = (items, order) => {

        let len = items.length, max;
    
        for (let i=0; i < len; i++){
    
            //set maximum to this position
            max = i;
    
            //check the rest of the array to see if anything is smaller

            if (order == "Newest"){ // time based
                for (let j=i+1; j < len; j++){
                    if (items[j].times[0] > items[max].times[0]){
                        max = j;
                    }
                }
            } else if (order == "Top"){ // like based
                for (let j=i+1; j < len; j++){
                    if (items[j].likes[0] > items[max].likes[0]){
                        max = j;
                    }
                }
            } else{ // reply based
                for (let j=i+1; j < len; j++){
                    if (items[j].contents.length > items[max].contents.length){
                        max = j;
                    }
                }
            }
    
            //if the maximum isn't in the position, swap it
            if (i != max){
                this.swap(items, i, max);
            }
        }
    
        return items;
    }


    handleOrder = (e) =>{
        console.log(e);
        const postsListB = this.state.postsList;
        if (e == "Newest"){ // time based
            this.setState({postsList: this.selectionSort(postsListB, "Newest")})
        } else if (e == "Top rated"){ // like based
            console.log(this.selectionSort(postsListB, "Top"));
            this.setState({postsList: this.selectionSort(postsListB, "Top")})
        } else{ // reply based
            this.setState({postsList: this.selectionSort(postsListB, "Hottest")})
        }
        return;
    }

    handlePage = (mode, page) => {
        if (mode === 'next'){
            if (this.state.currShown[1]>=this.state.postsList.length) return;
            this.setState({currShown: [this.state.currShown[0] + 10, this.state.currShown[1] + 10]});
        } else{
            this.setState({currShown: [(page-1)*10, page*10]});
        }
        
    }

    handleRemove = (mediaNum, e) => {
        e.preventDefault();
        const postsListB = this.state.postsList;
        postsListB.splice(mediaNum, 1);
        console.log(postsListB);
        this.setState({postsList: postsListB});
    }
}

export default QA;
