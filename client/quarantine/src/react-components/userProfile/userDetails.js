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
                                            className="col col-md-6"
                                            className="form-group"
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
                                            className="col col-md-6"
                                            className="form-group"
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
                                            className="col col-md-6"
                                            className="form-group"
                                        >
                                            <label htmlFor="feEmail">
                                                Email
                                            </label>

                                            <input
                                                type="email"
                                                class="form-control"
                                                id="feEmail"
                                                placeholder="Email Address"
                                                autoComplete="email"
                                            ></input>
                                        </div>
                                        <div
                                            className="col col-md-3"
                                            className="form-group"
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
                                            className="col col-md-3"
                                            className="form-group"
                                        >
                                            <label htmlFor="feGender">
                                                Gender
                                            </label>
                                            <select class="form-control">
                                                {/* <option>Choose...</option> */}
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label htmlFor="feAddress">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="feAddress"
                                                placeholder="Address"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div
                                            className="col col-md-6"
                                            className="form-group"
                                        >
                                            <label htmlFor="feCity">City</label>

                                            <input
                                                type="text"
                                                class="form-control"
                                                id="feCity"
                                                placeholder="City"
                                            ></input>
                                        </div>
                                        <div
                                            className="col col-md-4"
                                            className="form-group"
                                        >
                                            <label htmlFor="feInputState">
                                                State
                                            </label>
                                            <select class="form-control">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <label htmlFor="feDescription">
                                                Description
                                            </label>

                                            <textarea
                                                class="form-control"
                                                id="feDescription"
                                                rows="5"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-info"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const fName = document.querySelector(
                                                "#feFirstName"
                                            ).value;
                                            const lName = document.querySelector(
                                                "#feLastName"
                                            ).value;
                                            const name = fName + " " + lName;
                                            const gender = document.querySelector(
                                                "#feInputGender"
                                            ).value;
                                            const age = document.querySelector(
                                                "#feAge"
                                            ).value;
                                            const city = document.querySelector(
                                                "#feCity"
                                            ).value;
                                            const description = document.querySelector(
                                                "#feDescription"
                                            ).value;
                                            this.props.onUpdateClick(
                                                name,
                                                gender,
                                                age,
                                                city,
                                                description
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
