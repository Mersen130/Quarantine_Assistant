import { ReplSet } from "mongodb";

export const getAllNormalUsers = (component) =>{
    const url="/normalUsers";
    fetch(url)
        .then(res=>{
            if(res.status === 200){
                return res.json();
            }
            else{
                alert("Could not get normal users");
            }
        })
        .then(json=>{
            console.log(json.normalUsers);
            component.setState({userList:json.normalUsers})
        })
};
export const deleteUser = (user, listComp) =>{
    const url = `/user/${user._id}`;
    console.log(url);
    // The data are going to send in our request
    // const users = listComp.state

    //Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method:"delete",
        body:JSON.stringify(user),
        headers:{
            Accept:"application/json, text/plain, */*",
            "Content-Type": "application.json"
        }
    });

    //Send the request with fetch()
    fetch(request)
        .then(function(res){
            if(res.status === 200){
                return res.json
            }
        })
        .then(json =>{
            console.log(json.users);
            // listComp.setState({userList:json.users})
        })
        .catch(error=>{
            console.log(error)
        })
    // getAllNormalUsers(listComp);
};

export const deleteDoctor = (doctor, listComp) =>{
    const url = `/user/${doctor._id}`;
    console.log(url);
    // The data are going to send in our request
    // const users = listComp.state

    //Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method:"delete",
        body:JSON.stringify(doctor),
        headers:{
            Accept:"application/json, text/plain, */*",
            "Content-Type": "application.json"
        }
    });

    //Send the request with fetch()
    fetch(request)
        .then(function(res){
            if(res.status === 200){
                return res.json
            }
        })
        .then(json =>{
            console.log(json.doctors);
            // listComp.setState({doctorList:json.doctors})
        })
        .catch(error=>{
            console.log(error)
        });
};


export const getAllDoctors = (component) =>{
    const url="/doctors";
    fetch(url)
        .then(res=>{
            if(res.status === 200){
                return res.json();
            }
            else{
                alert("Could not get doctors");
            }
        })
        .then(json=>{
            // console.log(json.doctors);
            component.setState({doctorList:json.doctors})
        })
};