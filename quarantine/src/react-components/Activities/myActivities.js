import React from "react";
import {removeFromMyList} from "./activitiesActions.js";
import "./myActivities.css";

class MyActivites extends React.Component{

	constructor(props){
		super(props);
	}

		render(){
		const {myAct, queueComponent}=this.props;
		return(
			<tr>
			<td>{myAct.name}</td>
			<td>{myAct.type}</td>
			<td>
				<button 
					type="button"
					id="removeFromMyList"
					class="ActivityBtn"
					onClick={
						removeFromMyList.bind(this,myAct,queueComponent)
					}
				>
					Remove
				</button>
			</td>
			</tr>
			);

	}

}
export default MyActivites;