import React from "react";
import Sidebar from "../SideNavBar/sidebar.js";
import RecommendList from "./RecommendList.js";
import MyList from "./myList.js";

class Activities extends React.Component {
    state = {
        userActList: [
        ],
        recommendList: [
        ]
    };

    render() {
        return (
            <div>
                <Sidebar title={"Activities"} />
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
