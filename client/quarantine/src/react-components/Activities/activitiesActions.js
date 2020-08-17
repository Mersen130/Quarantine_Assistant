import {addActivities, deleteActivities} from "../../actions/user";
export const addToMyList = (recAct, queue) =>{
	const myList = queue.state.userActList;


	const newAct={
		activityTitle:recAct.activityTitle,
		activityType:recAct.activityType,
		activityDescription:recAct.activityDescription
	};

	const recFilteredList = queue.state.recommendList.filter(act =>{
		return act !== recAct;
	});

	myList.push(newAct);
	queue.setState({
		userActList:myList,
		recommendList:recFilteredList
	});
	addActivities(queue,recAct);
};

export const removeFromMyList = (queue, myAct) =>{
	const recommendList=queue.state.recommendList;
	const filteredMyActs = queue.state.userActList.filter(act =>{
		return act !== myAct;
	});
	recommendList.push(myAct);
	queue.setState({
		userActList: filteredMyActs,
		recommendList:recommendList
	});
	
	deleteActivities(queue, myAct);
};