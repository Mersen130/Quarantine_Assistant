import React from "react";
import MyActivities from "./myActivities.js";
import {uid} from "react-uid";

class MyList extends React.Component{
	render(){
		const {myActs, queueComponent}=this.props;
		return(
			<table class="table table-bordered">
				<thead class = "thead-dark">
					<th scope="col">Activities</th>
					<th scope="col">Type</th>
					<th scope="col"></th>
				</thead>
				<tbody>
					{myActs.map(myAct =>
						<MyActivities
							key={uid(myAct)}
							myAct={myAct}
							queueComponent={queueComponent}
						/>
						)}	
				</tbody>
			</table>
			);

	}
}
export default MyList;