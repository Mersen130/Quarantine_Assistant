import React from "react";
import {removeDoctor} from "./adminDashboardActions";
import "./users.css";



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
                    <button class = "userDeleteBtn"
                        onClick={()=>{
                            removeDoctor(doctor, component);
                        }}
                    >
                        Delete the Doctor
                    </button>
                </td>
            </tr>
			
			);

	}

}
export default Doctors;