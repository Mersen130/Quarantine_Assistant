export const handleFormChange = (component, field) =>{
    const value = field.value;
    const name = field.name;

    component.setState({
        [name]: value
    });
  };

export const handleUserType = (component, inputField)=>{
    const value  = inputField.value;
    const name = inputField.name;
    if(!value){
        component.setState({
            userType:""
        });
    }else{
        component.setState({
            userType:"doctor",
            [name]:value
        });
    }
};

export const signIn = (component, app,history) =>{
    const request = new Request("/users/signIn", {
        method: "post",
        body: JSON.stringify(component.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentUserName !== undefined) {

                 app.setState({ currentUserName: json.currentUserName,
                                currentUserType:json.currentUserType,
                                quarantineStartDate:json.quarantineStartDate
                             });
                component.props.history.push("/dashboard");
            } else{
                alert("Please double check your username and password.")
                component.props.history.push("/SignIn");

            }
        })
        .catch(error => {
            console.log(error);
        });
};
export const signUp = (component, app, history)=>{
    const request = new Request("/users/signUp", {
        method: "post",
        body: JSON.stringify(component.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res =>{
            if(res.status === 200){
                return res.json();
            }
        })
        .then(json =>{
            console.log("signUp json: " +json);
            if(json.currentUserName !== undefined){     
                app.setState({
                    currentUserName:json.currentUserName,
                    currentUserType:json.currentUserType,
                    quarantineStartDate:json.quarantineStartDate
                });
                history.push('/dashboard');
            }
        })
        .catch(err =>{
            console.log(err);
        });

};

export const reset = (user, history)=>{
    const request = new Request("/users/resetPswd", {
        method: "put",
        body: JSON.stringify(user.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res=>{
            if(res.status ===200){
                return res.json();
            }
        })
        .then(json =>{
            user.setState({
                email:user.email,
                password:user.password
            });
            history.push('/SignIn');
        })

}
export const logout = (app,history) => {
    const url = "/users/logout";

    fetch(url)
        .then(res => {
            app.setState({
                currentUserName: null,
                currentUserType:null
            });
            console.log(app.currentUserName);
            history.push('/SignIn');
        })
        .catch(error => {
            console.log(error);
        });
};
// export const resetPswd = ()=>{

// }

export const readCookie = (app) => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUserName) {
                app.setState({ currentUserName: json.currentUserName,
                                currentUserType:json.currentUserType,
                                quarantineStartDate:json.quarantineStartDate});
            }
        })
        .catch(error => {
            console.log(error);
        });
};

//get a tip from the database
export const getTips = (component) =>{
    const url="/tips";
    fetch(url)
        .then(res=>{
            if(res.status===200){
                return res.json();
            }
            else{
                alert("Could not get the tip")
            }
        })
        .then(json =>{
            component.setState({tips:json.tip});
        })
        .catch(error=>{
            console.log(error);
        })
}

//get a news from the database
export const getNews = (component) =>{
    const url="/news";
    fetch(url)
        .then(res=>{
            if(res.status===200){
                return res.json();
            }
            else{
                alert("Could not get the news")
            }
        })
        .then(json =>{
            component.setState({news:json.news})
        })
        .catch(error=>{
            console.log(error);
        })
}

//get users' activities
export const getAllUserActivities = (component)=>{
    const url = "/users/activities";
    fetch(url)
        .then(res=>{
            if(res.status === 200){
                return res.json();
            }
            else{
                alert("Could not get activities");
            }
        })
        .then(json=>{
            console.log(json.activities);
            component.setState({userActList:json.activities})
        })
        .catch(error=>{
            console.log(error);
        })
};

//get all activities in the database
export const getAllActivities = (component) =>{
    const url="/activities";
    fetch(url)
        .then(res=>{
            if(res.status === 200){
                return res.json();
            }
            else{
                alert("Could not get activities");
            }
        })
        .then(json=>{
            console.log(json.activities);
            component.setState({recommendList:json.activities})
        })
};

export const deleteActivities = (component, act) =>{
    const url=`/users/activities/${act._id}`;
    const request = new Request(url, {
        method: "delete",
        body: JSON.stringify(component.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res =>{
            if(res.status === 200){
                return res.json
            }

        })
        .then(json=>{
            console.log(json.updatedUser.activities);
            // component.setState({userActList:json.updatedUser.activities})
        })
        .catch(error=>{
            console.log(error);
        });

}

export const addActivities = (component, act)=>{
    const url=`/users/activities/${act._id}`;
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(component.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res =>{
            if(res.status===200){
                return res.json
            }
        })
        .then(json =>{
            // component.setState({userActList:json.updatedUser.activities})
            console.log(json.updatedUser.activities)
        })
        .catch(error =>{
            console.log(error);
        });
}