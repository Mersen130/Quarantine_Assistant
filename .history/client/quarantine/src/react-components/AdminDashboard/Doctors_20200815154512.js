import React from "react";
import {removeDoctor} from "./adminDashboardActions"



class Doctors extends React.Component{

	constructor(props){
		super(props);
	}
		render(){
		const {doctor, component}=this.props;
		return(
			<tr>
                <td>{doctor._id}</td>
                <td>{doctor.userName}</td>
                <td>{doctor.email}</td>
                <td>{doctor.docCertificate}</td>
                <td>{doctor.region}</td>
                <td>
                    <button class = "userDelete"
                        onClick={()=>{
                            removeDoctor(doctor, component);
                        }}
                    >
                        Delete the User
                    </button>
                </td>
            </tr>
			
			);

	}

}
export default Doctors;