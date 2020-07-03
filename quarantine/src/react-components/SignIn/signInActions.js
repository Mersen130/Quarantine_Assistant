
export const handleSubmit = (userName, password, history) =>{
	if(userName === "user" && password === "user"){
		history.push("./dashboard")
	}
	if(userName === "admin" && password === "admin"){
	 	history.push('./dashboard')
	}

	
};

export const handleChangePage = (path, history) =>{
	history.push(path);
}