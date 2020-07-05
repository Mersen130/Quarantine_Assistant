import React from "react";
import Sidebar from '../../SideNavBar/sidebar.js';
import RecommendList from "./RecommendList.js";
import MyList from './myList.js';


class Activities extends React.Component{

	state = {
		userActList:[
			{name:"10 Days of Yoga", type:"sport"},
			{name:"Learn Java in 5 days", type:"study"}
		],
		recommendList:[
			{name: "Reading 'The Harry Potter series' By J.K. Rowling in 7 days", type:"reading"},
			{name: "A list of trending movies", type:"movie"}
		]
	};

	render(){

		return(
			<div>
				<Sidebar title={"My Activities"}/>
				<div id="myActivitiesBlock">
					<h3 id="h3_myAct">My Activities:</h3>
					<MyList
						myActs={this.state.userActList}
						queueComponent={this}
					/>
				</div>
				<div id="recommendBlock">
					<h3 id="h3_recommendAct">Recommend Activities:</h3>
					<RecommendList 
						recommendActs={this.state.recommendList}
						queueComponent={this}
					
					/>
				</div>
			</div>
			);
	}
}

export default Activities;