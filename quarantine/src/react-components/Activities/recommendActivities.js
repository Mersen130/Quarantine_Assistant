import React from "react";
import {addToMyList} from "./activitiesActions.js";
import "./myActivities.js";


class RecommendActivities extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		const {recAct, queueComponent}=this.props;
		return(
			<tr>
			<td>{recAct.name}</td>
			<td>{recAct.type}</td>
			<td>
				<button 
					type="button"
					id="addActToMyList"
					class="ActivityBtn"
					onClick={
						addToMyList.bind(this,recAct,queueComponent)
					}
				>
					Add
				</button>
			</td>
			</tr>
			);

	}
}

export default RecommendActivities;