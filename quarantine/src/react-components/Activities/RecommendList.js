import React from 'react';
import { uid } from "react-uid";
import RecommendActivities from "./recommendActivities.js";



class RecommendList extends React.Component{
	render(){
		const {
			recommendActs,
			queueComponent
			}=this.props;
		return(
			<table class="table table-bordered">
				<thead class ="thead-dark">
					<th scope="col">Activities</th>
					<th scope="col">Type</th>
					<th scope="col"></th>
				</thead>
				<tbody>
					{recommendActs.map(recAct =>
						<RecommendActivities
							key={uid(recAct)}
							recAct={recAct}
							queueComponent={queueComponent}
						/>
						)}	
				</tbody>
			</table>
			);

	}

}
export default RecommendList;