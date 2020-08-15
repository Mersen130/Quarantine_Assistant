export const addToMyList = (recAct, queue) =>{
	const myList = queue.state.userActList;


	const newAct={
		activityTile:recAct.activityTile,
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

export const removeUser = (user, component) =>{
	const filteredUsers = component.state.userList.filter(u =>{
		return u !== user;
	});
	queue.setState({
		userList: filteredUsers
	});
	deleteActivities(user, component);
};