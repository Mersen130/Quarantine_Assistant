
import React from 'react';
import '../../components.css';
import { Redirect } from 'react-router';

class Media extends React.Component {

    constructor(props) {
        super(props)
        const { posterId, posterType, names, contents, times, likes } = this.props.postsList;
        const liked = [];
        likes.map( i => liked.push(false) )
        this.state = {
            userInfo: this.props.userInfo,
            liked: liked,
            replied: false,
            posterId: posterId,
            posterType: posterType,
            names: names,
            contents: contents,
            times: times,
            likes: likes,

            redirect: false,
            clickedUser: "",
        }

    }


    render() {

        const { posterId, posterType, names, contents, times, likes } = this.state;
        const mediaId = this.props.mediaId;
        const indices = [];
        for (let i = 1; i < names.length; i++) {
            indices.push(i);
        }
        const redirectComponent = <Redirect to={{pathname: '/UserProfile', state: { clickedUser: this.state.clickedUser}}}/> ;
        console.log("in media.js: ", this.state);
        return (
            <div className="container mt-3 mt-3Qa Media">
                {this.state.redirect? redirectComponent : ""}
                <div className="media border borderQa p-3">
                    <img src={require("../../lib/profilephotos/user1.png")} onClick={function () {
                        this.setState({ redirect: true, clickedUser: posterId[0]});
                    }} className="profilephotoQa" />
                    <div className="media-body">
                        <h4 className="h4Qa">{names[0]} <small><i>{posterType[0] == 'doctor' ? (<img src={require("../../lib/qa/certified.png")}/>+" doctor") : ""} posted on {new Date(times[0]).toString().slice(0, 25)}</i></small></h4>
                        <p className="content contentQa">{contents[0]} {names[0] === this.state.userInfo && <a href="#" onClick={(e) => this.props.handleRemove(0, e)}>delete</a>} {names.length == 1 && <input type="image" src={require("../../lib/qa/reply.png")} className="replyBtn" onClick={() => this.showReply(0, mediaId)} />} <button onClick={(e) => this.like(0, likes[0], e)} className="likeQa btn-primary ">Like</button></p>
                        {names.length == 1 && <div><input id={"replyInput0" + mediaId.toString(10)} className="replyInput" type="text" onKeyUp={(e) => this.reply(0, mediaId, e)} placeholder={"reply to " + names[0]} /></div>}
                        <div>
                            {indices.map(i => (
                                <div className="media p-3">
                                    <img src={require("../../lib/profilephotos/user2.png")} onClick={function () {
                                        this.setState({ redirect: true, clickedUser: posterId[i]});
                                    }} className="profilephotoQa" />
                                    <div className="media-body">
                                        <h4 className="h4Qa">{names[i]} <small><i> {posterType[i] == 'doctor' ? (<img src={require("../../lib/qa/certified.png")}/>+" doctor") : ""} replied on {new Date(times[i]).toString().slice(0, 25)}</i></small></h4>
                                        <p class="content contentQa">{contents[i]} {i == names.length - 1 && <input className="replyBtn" type="image" src={require("../../lib/qa/reply.png")} onClick={() => this.showReply(i, mediaId)} />} {names[i] === this.state.userInfo && <a href="#" onClick={(e) => this.props.handleRemove(i, e)}>delete</a>} <button onClick={(e) => this.like(1, likes[i], e)} className="likeQa btn-primary">Like</button></p>
                                        {i == names.length - 1 && <div><input id={"replyInput" + i.toString(10) + mediaId.toString(10)} className="replyInput" type="text" onKeyUp={(e) => this.reply(i, mediaId, e)} placeholder={"reply to " + names[i]} /></div>}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    like = (i, likeNum, e) => {
        e.preventDefault();
        if (this.state.liked[i]) {
            this.props.handleLike(i, -1);
            e.target.innerText = "Like";
            this.state.liked[i] = false;
        } else {
            this.props.handleLike(i, 1);
            e.target.innerText = (likeNum + 1).toString(10) + " Likes";
            this.state.liked[i] = true;
        }
    }

    showReply = (i, mediaId) => {
        if (i > 0) {
            document.getElementById("replyInput" + i.toString(10) + mediaId.toString(10)).style.left = "16%";
        }
        if (!this.state.replied) {
            document.getElementById("replyInput" + i.toString(10) + mediaId.toString(10)).style.visibility = "visible";
        } else {
            document.getElementById("replyInput" + i.toString(10) + mediaId.toString(10)).style.visibility = "collapse";
        }
        this.setState({ replied: !this.state.replied });
    }

    reply = (i, mediaId, e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            this.props.handleReply(this.state.names[i], e.target.value);
            this.showReply(i, mediaId);
        }

    }

}

export default Media;
