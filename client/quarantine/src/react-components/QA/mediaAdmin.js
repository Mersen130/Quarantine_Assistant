
import React from 'react';
import '../../components.css';
import { Redirect } from 'react-router';

class MediaAdmin extends React.Component {

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
            clickedUserType: "",
        }

    }

    render() {

        const { posterId, posterType, names, contents, times} = this.state;
        const mediaId = this.props.mediaId;
        const indices = [];
        for (let i = 1; i < names.length; i++){
            indices.push(i);
        }
        const redirectComponent = <Redirect to={{pathname: '/UserProfile', state: { clickedUser: this.state.clickedUser}}}/> ;

        return (
            <div className="container mt-3 mt-3Qa Media">
                {this.state.redirect? redirectComponent : ""}
                <div className="media border borderQa p-3">
                    <img src={require("../../lib/profilephotos/user1.png")} onClick={() => {
                        if (posterType[0] !== "doctor") {
                            this.setState({ redirect: true, clickedUser: posterId[0], clickedUserType: "user"});
                        } else{
                            this.setState({ redirect: true, clickedUser: posterId[0], clickedUserType: posterType[0]});
                        }
                    }} className="profilephotoQa" />
                    <div className="media-body">
                        <h4 className="h4Qa">{names[0]} <small><i>{posterType[0] == 'doctor' ? <span><img src={require("../../lib/qa/certified.png")}/> doctor</span> : ""} posted on {new Date(times[0]).toString().slice(0, 25)}</i></small></h4>
        <p className="content contentQa">{contents[0]} <a href="#" onClick={(e) => this.props.handleRemove(0, e)}>delete</a></p>
                        {names.length == 1 && <div><input id={"replyInput0"+mediaId.toString(10)} className="replyInput" type="text" onKeyUp={(e) => this.reply(0, mediaId, e)} placeholder={"reply to "+names[0]}/></div>}
                        <div>
                            {indices.map(i => (
                            <div className="media p-3">
                                <img src={require("../../lib/profilephotos/user1.png")} onClick={() => {
                                        if (posterType[i] !== "doctor") {
                                            this.setState({ redirect: true, clickedUser: posterId[i], clickedUserType: "user"});
                                        } else{
                                            this.setState({ redirect: true, clickedUser: posterId[i], clickedUserType: posterType[i]});
                                        }
                    }} className="profilephotoQa" />
                                <div className="media-body">
                                    <h4 className="h4Qa">{names[i]} <small><i>{posterType[i] == 'doctor' ? <span><img src={require("../../lib/qa/certified.png")}/> doctor</span> : ""} replied on {new Date(times[i]).toString().slice(0, 25)}</i></small></h4>
                                    <p class="content contentQa">{contents[i]} <a href="#" onClick={(e)=>this.props.handleRemove(i, e)}>delete</a></p>
                                </div>
                            </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default MediaAdmin;
