import React from "react";
import Sidebar from "../SideNavBar/sidebar.js";
import RecommendList from "./RecommendList.js";
import MyList from "./myList.js";
import { getAllActivities, getAllUserActivities } from "../../actions/user.js";

class Activities extends React.Component {
    state = {
        userActList: [
        ],
        recommendList: [
        ],
        sport:require("../../lib/activities/Sports.png"),
        yoga:require("../../lib/activities/Yoga.png"),
        book:require("../../lib/activities/Book.png"),
        cook:require("../../lib/activities/Book.png"),
        movie:require("../../lib/activities/Movie.png"),
        study:require("../../lib/activities/Study.png")
    };
    componentDidMount() {
        getAllActivities(this);
        getAllUserActivities(this);  
      }

    render() {
        const {app} = this.props;
        return (
            <div>
                <Sidebar userName={app.state.currentUserName} title={"Activities"} app={app}/>
                <div className="main-content-container px-4 py-4 container-fluid">
                    <div div className="col-lg-10 offset-lg-2">
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
                </div>
            </div>
        );
    }
}

export default Activities;
