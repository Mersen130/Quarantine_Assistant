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
			// <tr>
			// <td>{recAct.name}</td>
			// <td>{recAct.type}</td>
			// <td>
			// 	<button 
			// 		type="button"
			// 		id="addActToMyList"
			// 		class="ActivityBtn"
			// 		onClick={
			// 			addToMyList.bind(this,recAct,queueComponent)
			// 		}
			// 	>
			// 		Add
			// 	</button>
			// </td>
			// </tr>
			<div class="card mb-3">
			  <div class="row no-gutters">
			    <div class="col-md-4">
			      <img src={recAct.image} class="card-img"/>
			    </div>
			    <div class="col-md-8">
			      <div class="card-body">
			        <h5 class="card-title">{recAct.name}</h5><p>{recAct.type}</p>
			        <p class="card-text">{recAct.decr}</p>
			        <p class="card-text">
			        	<small class="text-muted">Last updated 3 mins ago</small>
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
			        </p>
			      </div>
			    </div>
			  </div>
			</div>
			);

	}
}

export default RecommendActivities;