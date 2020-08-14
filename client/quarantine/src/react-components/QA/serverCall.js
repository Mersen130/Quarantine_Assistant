function ServerCall() {

}

ServerCall.prototype = {
    sendPost: function (data) {
        const url = `/post`
        const request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
            .then((res) => {
                if (res.status === 200) {
                    // If post was added successfully, tell the user, and show the content.
                    return res.json();
                } else {
                    // If server couldn't add the post, tell the user.
                    console.log('post failed');
                    alert("Something went wrong, please try again.");
                    return Promise.reject();
                    // TODO: add some UI to notify user
                }
            })
            .then(json => {
                data._id = json.currentPost;
                console.log('Added post')
                this.state.postsList.splice(0, 0, data);
                const newList = this.state.postsList;
                this.setState({ postsList: newList });
            })
            .catch((error) => {
                console.log(error)
            });
    },

    sendReply: function (newList, mediaId) {
        const url = `/reply/${newList[mediaId]._id}`;

        const request = new Request(url, {
            method: 'PATCH',
            body: JSON.stringify(newList[mediaId]), // data to send over(the entire post)
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        fetch(request)
        .then((res) => {
            if (res.status === 200){
                return res.json();
            } else{
                console.log('reply failed');
                alert("Something went wrong, please try again.");
            }
        })
        .then(json => {
            // newList.posterId.push(this.state.userInfo.userId);
            // newList.posterType.push(this.state.userinfo.userType);
            // newList.posterName.push(this.state.userinfo.userName);
            this.setState({ postsList: newList });
            this.pushNote("A reply has been added to your post.");
        })
        .catch(error=>{
            console.log(error);
        })
    },

    sendLike: function (postsListB, postIndex, contentIndex, likeNum){
        const url = `/post/like/${postsListB[postIndex]._id}`;

        const request = new Request(url, {
            method: 'PATCH',
            body: JSON.stringify({
                contentIndex: contentIndex,
                likeNum: likeNum,
            }), // data to send over
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200){
                this.setState({ postsList: postsListB });
                this.pushNote("A like has been added to your post.");
            } else{
                console.log('like failed');
            }
        })
        .catch(error => {
            console.log(error);
        })
    },

    loadPosts: function(){
        const url = "/post"
        let info;
        const request = new Request(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        fetch(request)
        .then( res => {
            if (res.status === 200){
                return res.json();
            } else{
                console.log("get posts failed");
                alert("Something went wrong, please try again.");
                return Promise.reject();
            }
        })
        .then(json => {
            info = json;
            const postsList = [];
            info[0].map(content => {
                const adjustContent = {
                    posterId: content.posterId,
                    posterType: content.posterType,
                    _id: content._id,
                    names: content.posterName,
                    contents: content.postContent,
                    times: content.postTime,
                    likes: content.numLikes,
                    tags: content.tags,
                }
                postsList.push(adjustContent)
            })
            this.setState({
                userInfo: info[1],
                postsList: postsList,
            }, () => console.log(this.state));
            
        })
        .catch(error => {
            console.log(error);
        })
    },

    removePost: function(postId, postsListB){
        const url = `/post/${postId}`;

        const request = new Request(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200){
                this.setState({ postsList: postsListB });
                this.pushNote("A post has been deleted.");
            } else{
                console.log('delete failed');
                alert("Something went wrong, please try again.");
            }
        })
        .catch(error=>{
            console.log(error);
        })
    },

    removeReply: function(postId, contentIndex, postsListB){
        const url = `/reply/delete/${postId}`;

        const request = new request(url, {
            method: 'PATCH',
            body: JSON.stringify({
                contentIndex: contentIndex,
            }), // data to send over
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200){
                this.setState({ postsList: postsListB });
                this.pushNote("A post has been deleted.");
            } else{
                console.log('delete failed');
                alert("Something went wrong, please try again.");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
}

const serverCall = new ServerCall()
export default serverCall;