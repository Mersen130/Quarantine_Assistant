function ServerCall() {

}

ServerCall.prototype = {
    sendPost: function (data) {
        const url = `/post/${this.props.currentUser}` // todo
        const request = new Request(url, {
            method: 'post',
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
                    console.log('post failed')
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
        const url = `/reply/${newList._id}`;

        const request = new Request(url, {
            method: 'put',
            body: JSON.stringify(newList[mediaId]), // data to send over(the entire post)
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200){
                this.setState({ postsList: newList });
                this.pushNote("A reply has been added to your post.");
            } else{
                console.log('reply failed');
            }
        })
        .catch(error=>{
            console.log(error);
        })
    },

    sendLike: function (postsListB, postIndex, contentIndex, likeNum){
        const url = `/post/like/${postsListB[postIndex]._id}`;

        const request = new request(url, {
            method: 'patch',
            body: JSON.stringify({
                contentIndex: contentIndex,
                likeNum: likeNum,
            }), // data to send over(the entire post)
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
        let postsList;
        const request = new Request(url, {
            method: "get",
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
                return Promise.reject();
            }
        })
        .then(json => {
            postsList = json;
        })
        .catch(error => {
            console.log(error);
        })
        return postsList;
    },

    removePost: function(postId, postsListB){
        const url = `/post/${newList._id}`;

        const request = new Request(url, {
            method: 'post',
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
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
}

const serverCall = new ServerCall()
export default serverCall;