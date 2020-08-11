function ProfileServerCall(){

}

ProfileServerCall.prototype = {
    loadUser: function(userid){
        let url;
        if (!userid){
            url = "/profile/me"
        } else{
            url = `/profile/${userid}`
        }
        let info;
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
                alert("Something went wrong, please try again.");
                return Promise.reject();
            }
        })
        .then(json => {
            info = json;
        })
        .catch(error => {
            console.log(error);
        })
        return info;
    }
}

const profileServerCall = new ProfileServerCall()
export default profileServerCall;