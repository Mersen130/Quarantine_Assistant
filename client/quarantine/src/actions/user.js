import { json } from "express";

export const handleFormChange = (component, inputField) =>{
    const value = inputField.value;
    const name = inputField.name;
    component.setState({
        [name]:value
    });
  };

export const signIn = (component, app) =>{
    const request = new Request("users/signIn",{
        method:"post",
        body:JSON.stringify(component.state),
        headers:{
            Accept:"application/json, texxt/plain, */*",
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