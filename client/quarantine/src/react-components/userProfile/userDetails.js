import React from "react";
class UserDetails extends React.Component {
    render() {
        return (
            <div className="card small mb-4">
                <div className="card-header border-bottom">
                    <h6 className="m-0">Account Details</h6>
                </div>
                {/* TODO: Add servel call to retrieve user info from user DB*/}

                <div className="list-group-flush">
                    <div className="p-3 list-group-item">
                        <div className=" row">
                            <div className="col">
                                <form>
                                    <div className="form-group row">
                                        <div
                                            className="row1-1"
                                        >
                                            <label htmlFor="feFirstName">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="feFirstName"
                                                placeholder="First Name"
                                            ></input>
                                        </div>
                                        <div
                                            className="row1-2"
                                        >
                                            <label htmlFor="feLastName">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="feLastName"
                                                placeholder="Last Name"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div
                                            className="row1-1"
                                        >
                                            <label htmlFor="feAge">Age</label>

                                            <input
                                                type="number"
                                                class="form-control"
                                                id="feAge"
                                                placeholder="Age"
                                            ></input>
                                        </div>
                                        <div
                                            className="row1-2"
                                        >
                                            <label htmlFor="feGender">
                                                Gender
                                            </label>
                                            <select id="feInputGender" class="form-control">
                                                {/* <option>Choose...</option> */}
                                                <option selected={this.props.gender === "Male"? "selected":""}>Male</option>
                                                <option selected={this.props.gender === "Female"? "selected":""}>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div
                                            className="row4"
                                        >
                                            <label htmlFor="feRegion">Region</label>

                                            <input
                                                type="text"
                                                class="form-control"
                                                id="feRegion"
                                                placeholder="Region, Country"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="row4">
                                            <label htmlFor="feBio">
                                                Bio
                                            </label>

                                            <textarea
                                                class="form-control"
                                                id="feBio"
                                                rows="5"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-info"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            let fName = document.querySelector(
                                                "#feFirstName"
                                            ).value;
                                            let lName = document.querySelector(
                                                "#feLastName"
                                            ).value;
                                            let name = "";
                                            if (fName || lName){
                                                name = fName + " " + lName;
                                            } 
                                            let gender = document.querySelector(
                                                "#feInputGender"
                                            ).value;
                                            let age = document.querySelector(
                                                "#feAge"
                                            ).value;
                                            let region = document.querySelector(
                                                "#feRegion"
                                            ).value;
                                            let bio = document.querySelector(
                                                "#feBio"
                                            ).value;
                                            console.log(name, gender);
                                            this.props.onUpdateClick(
                                                name,
                                                gender,
                                                age,
                                                region,
                                                bio
                                            );
                                        }}
                                    >
                                        Update Account
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
UserDetails.defaultProps = {
    title: "Account Details",
};

export default UserDetails;
