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
                console.log("load user failed");
                alert("Something went wrong, please try again.");
                return Promise.reject();
            }
        })
        .then(json => {
            info = json;
            const userInfo = info[0];
            this.setState({
                userName: userInfo.userName,
                age: userInfo.age,
                userType: userInfo.userType,
                avatar: require("./sampleprofile.png"),
                quarantineProgress: Math.floor((new Date() - new Date(userInfo.quarantineProgress))/ (1000*60*60*24)), // get progress percentage
                gender: userInfo.gender,
                bio: userInfo.selfDescription,
                region: userInfo.region,
                allowModification: !this.props.location.state,
                actInfo: info[1],
            });
        })
        .catch(error => {
            console.log(error);
        })
    },

    updateProfile: function(nameUpdate, genderUpdate, ageUpdate, cityUpdate, bioUpdate){
        const url = "/profile";
        const fieldsToUpdate = {};
        if (nameUpdate) fieldsToUpdate["userName"] = nameUpdate;
        if (genderUpdate) fieldsToUpdate["gender"] = genderUpdate;
        if (ageUpdate) fieldsToUpdate["age"] = ageUpdate;
        if (cityUpdate) fieldsToUpdate["region"] = cityUpdate;
        if (bioUpdate) fieldsToUpdate["selfDescription"] = bioUpdate;
        const request = new Request(url, {
            method: "PATCH",
            body: JSON.stringify(fieldsToUpdate),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        fetch(request)
        .then( res => {
            if (res.status === 200){
                if (bioUpdate) fieldsToUpdate["bio"] = fieldsToUpdate["selfDescription"];
                this.setState(fieldsToUpdate);
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