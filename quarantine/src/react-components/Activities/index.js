import React from "react";
import { Container, Row, Col } from "shards-react";
import Sidebar from "../SideNavBar/sidebar.js";
import RecommendList from "./RecommendList.js";
import MyList from "./myList.js";

class Activities extends React.Component {
  state = {
    userActList: [
      { name: "10 Days of Yoga",
       type: "sport", 
       image: require("../../lib/activities/Yoga.png"),
       decr:"this is the decription of this activities: blahblah"
     },
      { name: "Learn Java in 5 days",
       type: "study",
       image: require("../../lib/activities/Yoga.png"),
       decr:"this is the decription of this activities: blahblah"
        },
    ],
    recommendList: [
      {
        name: "Reading 'The Harry Potter series' By J.K. Rowling in 7 days",
        type: "reading",
        image: require("../../lib/activities/Yoga.png"),
        decr:"this is the decription of this activities: blahblah"
      },
      { name: "A list of trending movies",
        type: "movie",
        image: require("../../lib/activities/Yoga.png"),
        decr:"this is the decription of this activities: blahblah"},
    ],
  };

  render() {
    return (
      <div>
        <Sidebar title={"Activities"} />
        <Container fluid className="main-content-container px-4 py-4">
          <Col lg={{ size: 10, offset: 2 }} md={{ size: 9, offset: 3 }}>
            <div id="myActivitiesBlock">
              <h3 id="h3_myAct">My Activities:</h3>
              <MyList myActs={this.state.userActList} queueComponent={this} />
            </div>
            <div id="recommendBlock">
              <h3 id="h3_recommendAct">Recommend Activities:</h3>
              <RecommendList
                recommendActs={this.state.recommendList}
                queueComponent={this}
              />
            </div>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Activities;
