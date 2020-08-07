import { json } from "express";

export const handleFormChange = (component, inputField) =>{
    const value = inputField.value;
    const name = inputField.name;
    component.setState({
        [name]:value
    });
  };

export const handleUserType = (component, inputField)=>{
    const value  = inputField.value;
    const name = inputField.name;
    if(!value){
        component.setState({
            userType:"normal_user"
        });
    }else{
        component.setState({
            userType:"doctor",
            [name]:value
        });
    }
};

export const signIn = (component, app) =>{
    const request = new Request("/users/signIn",{
        method:"post",
        body:JSON.stringify(component.state),
        headers:{
            Accept:"application/json, text/plain, */*",
            "Conten-Type":"application/json"
        }
    });
    //send the request
    fetch(request)
        .then(res =>{
            if(res.status === 200){
                return res.json();
            }
        })
        .then(json =>{
            if(json.currentUserName !== undefined && json.currentUserType !== undefined){
                app.setState({
                    currentUserName:json.currentUserName,
                    currentUserType:json.currentUserType
                });
            }
        })
        .catch(error =>{
            console.log(error);
        });
};
export const signUp = (component, app)=>{
    const request = new Request("/users/signUp",{
        method:"post",
        body:JSON.stringify(component.state),
        headers:{
            Accept:"application/json, text/plain, */*",
            "Conten-Type":"application/json"
        }
    });
    fetch(request)
        .then(res =>{
            if(res.status === 200){
                return res.json();
            }
        })
        .then(json =>{
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

export const readCookie = (app)=>{
    const url = "/users/check-session";
    fetch(url)
    .then(res =>{
        if(res.status === 200){
            return res.json();
        }
    })
    .then(json =>{
        if (json && json.currentUserName && json.currentUserType){
            app.setState({
                currentUserName:json.currentUserName,
                currentUserType:json.currentUserType
            });
        }
    })
    .catch(err =>{
        console.log(err);
    });
};