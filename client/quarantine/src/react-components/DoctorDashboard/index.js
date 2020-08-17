import React, { Component } from "react";
import Sidebar from "../SideNavBar/sidebar.js";
import PageTitle from "../theme/PageTitle";
import { ContentCardTips } from "./ContentCardTips.js";
import ContentCardNews from "./ContentCardNews.js";
import { getTips, getNews } from "../../actions/user.js";


export class DoctorDashboard extends Component {
    componentDidMount() {
        getTips(this);
        getNews(this);  
      }
    state = {
        tips:[],
        news:[]
    };
    
    render() {
        const {app}= this.props;
        return (
            <div>
                <Sidebar userName={app.state.currentUserName} title={"Dashboard"} />
                <div className=" main-content-container px-4 pb-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row no-gutters page-header py-4">
                            <PageTitle
                                sm="4"
                                title="Covid-19 related Tips & News"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                    </div>
                    <ContentCardTips category="Tips" component={this} />
                    <ContentCardNews category="News" component={this} />
                </div>
            </div>
        );
    }
}

export default DoctorDashboard;
