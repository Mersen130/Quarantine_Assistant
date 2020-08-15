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

export const signIn = (component, app) =>{
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
                // app.setState({ currentUserName: json.currentUserName,
                //                 currentUserType:json.currentUserType });
                component.props.history.push("/dashboard");
            }
        })
        .catch(error => {
            console.log(error);
        });
};
export const signUp = (component, app)=>{
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
                    currentUserType:json.currentUserType
                });
            }
        })
        .catch(err =>{
            console.log(err);
        });

}
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
                                currentUserType:json.currentUserType});
            }
        })
        .catch(error => {
            console.log(error);
        });
};