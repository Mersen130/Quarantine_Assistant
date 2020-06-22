
import React from 'react';
import './qa.css';
import Media from './media';
import { uid } from "react-uid";


class QA extends React.Component {
    state={
        /*user = this.props.user*/
        postsList: [{names: ["Qixin", "Yifei"], contents: ["Aba aba aba?", "Aba aba aba aba aba."], times: [new Date(), new Date()], likes: [100, 2]},
                    {names: ["Qixin", "Yifei"], contents: ["Aba aba aba?", "Aba aba aba aba aba."], times: [new Date(), new Date()], likes: [1, 659]}]

    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="title">Quanrantine Assistant Communities</h1>
                        <p>Find answers, ask questions, and connect with our community of the most authoritative doctors from around the world.</p>
                        <form className="searchGroup">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Type your question here..." />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.search}>Search !</button>
                        </form>
                    </div>
                </div>

                <div>
                    <form action="#" className="postForm">
                        <img src={require("../lib/profilephotos/Qixin.png")} className="profilephotoPost" />

                        <div className="form-group">
                            <input className="form-control" id="post" placeholder="Make a new post here..." name="email"/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.post}>Post ! !  </button><br/>
                        <div className="form-group tagDiv">
                            <input className="form-control" id="tags" placeholder="#Tags" name="pswd"/>
                        </div>
                        <div className="anonnCheck">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/> Anonnymous to others
                            </label>
                        </div>
                    </form>
                </div>
                <br/><hr/><br/><br/><br/>
                {this.state.postsList.map((post, mediaNum) => (
                    <Media key={uid(post)} postsList={post} handleLike={(i, amt)=>this.like(i, mediaNum, amt)} />
                ))}
                <button type="button" onClick={this.backTop} className="btn btn-primary btn-block">Back to top</button>
            </div>
    );
  }

    search = (e) =>{
        // todo
        e.preventDefault();
    }

    post = (e)=>{
        e.preventDefault();
        const post = document.querySelector("#post");
        console.log(post.value);
        this.state.postsList.splice(0, 0, {names: ["Qixin"], contents: [post.value], times: [new Date()], likes: [0]});
        const newList = this.state.postsList;
        this.setState({postsList: newList})
        // todo: a server call that sends data
    }

    backTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    like = (i, j, amt) =>{
        const postsListB = this.state.postsList;
        postsListB[j].likes[i] += amt;
        this.setState({postsList: postsListB});
    }
}

export default QA;
