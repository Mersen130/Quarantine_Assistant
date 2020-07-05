export const addToMyList = (recAct, queue) =>{
	const myList = queue.state.userActList;


	const newAct={
		name:recAct.name,
		type:recAct.type
	};

	const recFilteredList = queue.state.recommendList.filter(act =>{
		return act !== recAct;
	});

	myList.push(newAct);
	queue.setState({
		userActList:myList,
		recommendList:recFilteredList
	});
};

export const removeFromMyList = (myAct, queue) =>{
	const filteredMyActs = queue.state.userActList.filter(act =>{
		return act !== myAct;
	});
	queue.setState({
		userActList: filteredMyActs
	});
};