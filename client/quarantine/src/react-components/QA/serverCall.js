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
                    console.log('failed')
                    // TODO: add some UI to notify user
                }
            })
            .then(json => {
                data.id = json.currentPost;
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
        const url = `/reply/${newList.id}`;

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
            this.setState({ postsList: newList });
            this.pushNote("A reply has been added to your post.");
        })
        .catch(error=>{
            console.log(error);
        })
    },
}

const serverCall = new ServerCall()
export default serverCall;