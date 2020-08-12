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
                console.log("load user failed");
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
    },

    updateProfile: function(nameUpdate, genderUpdate, ageUpdate, cityUpdate, bioUpdate){
        const url = "profile"
        let info;
        const request = new Request(url, {
            method: "patch",
            body: {
                userName: nameUpdate,
                gender: genderUpdate,
                age: ageUpdate,
                region: cityUpdate,
                selfDescription: bioUpdate,
            },
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        fetch(request)
        .then( res => {
            if (res.status === 200){
                this.setState({
                    userName: nameUpdate,
                    gender: genderUpdate,
                    age: ageUpdate,
                    region: cityUpdate,
                    bio: bioUpdate,
                })
                return;
            } else{
                console.log("load user failed");
                alert("Something went wrong, please try again.");
                return Promise.reject();
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
}

const profileServerCall = new ProfileServerCall()
export default profileServerCall;