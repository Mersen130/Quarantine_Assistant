
import React from 'react';
import '../components.css'

class Media extends React.Component {

    state={liked: false, replied:false}

    render() {

        const {names, contents, times, likes} = this.props.postsList;
        const mediaId = this.props.mediaId;
        const indices = [];
        for (let i = 1; i < names.length; i++){
            indices.push(i);
        }

        return (
            <div className="container mt-3 mt-3Qa Media">
                <div className="media border borderQa p-3">
                    <img src={require("../lib/profilephotos/"+names[0]+".png")} className="profilephotoQa" />
                    <div className="media-body">
                        <h4 className="h4Qa">{names[0]} <small><i>Posted on {times[0].toString().slice(0, 25)}</i></small></h4>
                        <p className="content contentQa">{contents[0]} {names.length == 1 && <input type="image" src={require("../lib/qa/reply.png")} className="replyBtn" onClick={()=>this.showReply(0, mediaId)}/>} <button onClick={(e)=>this.like(0, likes[0], e)} className="likeQa btn btn-primary">Like</button></p>
                        {names.length == 1 && <div><input id={"replyInput0"+mediaId.toString(10)} className="replyInput" type="text" onKeyUp={(e) => this.reply(0, mediaId, e)} placeholder={"reply to "+names[0]}/></div>}
                        <div>
                            {indices.map(i => (
                            <div className="media p-3">
                                <img src={require("../lib/profilephotos/"+names[i]+".png")} className="profilephotoQa" />
                                <div className="media-body">
                                    <h4 className="h4Qa">{names[i]} <small><i> Replied on {times[i].toString().slice(0, 25)}</i></small></h4>
                                    <p class="content contentQa">{contents[i]} {i==names.length-1 && <input className="replyBtn" type="image" src={require("../lib/qa/reply.png")} onClick={()=>this.showReply(i, mediaId)}/>} <button onClick={(e)=>this.like(1, likes[i], e)} className="likeQa btn btn-primary">Like</button></p>
                                    {i==names.length-1 && <div><input id={"replyInput"+i.toString(10)+mediaId.toString(10)} className="replyInput" type="text" onKeyUp={(e) => this.reply(i, mediaId, e)} placeholder={"reply to "+names[i]}/></div>}
                                </div>
                            </div>
                            ))}
                        </div>
                        
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

    showReply = (i, mediaId) => {
        if (i>0){
            document.getElementById("replyInput"+i.toString(10)+mediaId.toString(10)).style.left="16%";
        }
        if (!this.state.replied){
            document.getElementById("replyInput"+i.toString(10)+mediaId.toString(10)).style.visibility = "visible";
        } else{
            document.getElementById("replyInput"+i.toString(10)+mediaId.toString(10)).style.visibility = "collapse";
        }
        this.setState({replied: !this.state.replied});
    }

    reply = (i, mediaId, e) => {
        e.preventDefault();
        if (e.keyCode === 13){
            this.props.handleReply("user1", e.target.value);
            this.showReply(i, mediaId);
        }

    }

}

export default Media;
