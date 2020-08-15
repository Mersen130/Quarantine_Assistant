import { deleteUser, deleteDoctor } from "../../actions/admin";

export const removeUser = (user, component) =>{
	const filteredUsers = component.state.userList.filter(u =>{
		return u !== user;
	});
	component.setState({
		userList: filteredUsers
	});
	deleteUser(user, component);
};

export const removeDoctor = (doctor, component) =>{
	const filteredDoctors = component.state.doctorList.filter(d =>{
		return d !== doctor;
	});
	component.setState({
		doctorList: filteredDoctors
	});
	deleteDoctor(doctor, component);
};