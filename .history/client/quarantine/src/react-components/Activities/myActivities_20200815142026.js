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
			<div class="card mb-3">
			  <div class="row no-gutters">
			    <div class="col-md-4">
			      <img src={myAct.image} class="card-img"/>
			    </div>
			    <div class="col-md-8">
			      <div class="card-body">
			        <h5 class="card-title">{myAct.name}</h5><p>{myAct.type}</p>
			        <p class="card-text">{myAct.decr}</p>
			        <p class="card-text">
			        	<small class="text-muted">Last updated 3 mins ago</small>
			        	<button 
							type="button"
							id="removeFromMyList"
							class="ActivityBtn"
							onClick={
								removeFromMyList.bind(this,queueComponent, myAct)
							}
						>
						Remove
						</button>
			        </p>
			      </div>
			    </div>
			  </div>
			</div>
			
			);

	}

}
export default MyActivites;