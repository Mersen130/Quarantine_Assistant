
import React from 'react';
import './qa.css';

class Media extends React.Component {

    state={liked: false}

    render() {

        const {names, contents, times, likes} = this.props.postsList;

        return (
            <div className="container mt-3 Media">
                <div className="media border p-3">
                    <img src={require("../lib/profilephotos/Qixin.png")} className="profilephoto" />
                    <div className="media-body">
                        <h4>{names[0]} <small><i>Posted on {times[0].toString().slice(0, 25)}</i></small></h4>
                        <p className="content">{contents[0]} {names.length == 1 && <input type="image" src={require("../lib/qa/reply.png")} className="replyBtn"/>} <button onClick={(e)=>this.like(0, likes[0], e)} className="like btn btn-primary">Like</button></p>

                        {names.length == 2 && 
                        <div className="media p-3">
                            <img src={require("../lib/profilephotos/Yifei.png")} className="profilephoto" />
                            <div className="media-body">
                                <h4>{names[1]} <small><i> Replied on {times[1].toString().slice(0, 25)}</i></small></h4>
                                <p class="content">{contents[1]} {<input className="replyBtn" type="image" src={require("../lib/qa/reply.png")}/>} <button onClick={(e)=>this.like(1, likes[1], e)} className="like btn btn-primary">Like</button></p>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        );
    }

    like = (i,likeNum, e) =>{
        e.preventDefault();
        if (this.state.liked){
            this.props.handleLike(i, -1);
            e.target.innerText = "Like";
            this.state.liked = false;
        } else{
            this.props.handleLike(i, 1);
            e.target.innerText = (likeNum+1).toString(10) + " Likes";
            this.state.liked = true;
        }
    }

}

export default Media;
