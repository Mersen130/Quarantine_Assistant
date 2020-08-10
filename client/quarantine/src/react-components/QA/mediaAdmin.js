
import React from 'react';
import '../../components.css';

class MediaAdmin extends React.Component {

    constructor(props) {
        super(props)
        const { posterId, posterType, names, contents, times, likes } = this.props.postsList;
        this.state = {
            userInfo: this.props.userInfo,
            liked: false,
            replied: false,
            posterId: posterId,
            posterType: posterType,
            names: names,
            contents: contents,
            times: times,
            likes: likes
        }

    }

    render() {

        const { posterId, posterType, names, contents, times} = this.state;
        const mediaId = this.props.mediaId;
        const indices = [];
        for (let i = 1; i < names.length; i++){
            indices.push(i);
        }

        return (
            <div className="container mt-3 mt-3Qa Media">
                <div className="media border borderQa p-3">
                    <img src={require("../../lib/profilephotos/user1.png")} onClick={function () {
                        window.location.href = names[0];
                    }} className="profilephotoQa" />
                    <div className="media-body">
                        <h4 className="h4Qa">{names[0]} <small><i>{posterType[0] == 'doctor' ? (<img src={require("../../lib/qa/certified.png")}/>+" doctor") : ""} posted on {times[0].toString().slice(0, 25)}</i></small></h4>
        <p className="content contentQa">{contents[0]} <a href="#" onClick={(e) => this.props.handleRemove(0, e)}>delete</a></p>
                        {names.length == 1 && <div><input id={"replyInput0"+mediaId.toString(10)} className="replyInput" type="text" onKeyUp={(e) => this.reply(0, mediaId, e)} placeholder={"reply to "+names[0]}/></div>}
                        <div>
                            {indices.map(i => (
                            <div className="media p-3">
                                <img src={require("../../lib/profilephotos/user2.png")} onClick={function () {
                        window.location.href = names[i];
                    }} className="profilephotoQa" />
                                <div className="media-body">
                                    <h4 className="h4Qa">{names[i]} <small><i>{posterType[i] == 'doctor' ? (<img src={require("../../lib/qa/certified.png")}/>+" doctor") : ""} replied on {times[i].toString().slice(0, 25)}</i></small></h4>
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
