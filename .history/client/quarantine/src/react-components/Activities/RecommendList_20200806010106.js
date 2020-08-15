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
			<table class="table">
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