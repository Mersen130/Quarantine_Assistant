import React from "react";
import { Alert } from "shards-react";
import ProgressCheck from "./ProgressCheck";
import ContentCard from "./ContentCard";
import ContentCardNews from "./ContentCardNews"
import Sidebar from "../SideNavBar/sidebar.js";
import PageTitle from "../theme/PageTitle";
import { getTips, getNews } from "../../actions/user";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // getNews();
        // this.props.history.push("/dashboard")

    }

    //get a random tip and news from the database
    componentDidMount() {
        getTips(this);
        getNews(this);  
        console.log("componentDidMount");
      }
    
    //   componentWillReceiveProps({ location = {} }) {
    //       console.log("componentWillReceiveProps");
    //     if (location.pathname === '/dashboard' && location.pathname !== this.props.location.pathname) {
    //       getTips(this);
    //     }
    //   }
    state={
        tips:{
          
        },
        news:{
         
        }

    }
    render() {
        const {app}= this.props;
        return (
            
            <div>

{/* //                 <Sidebar userName="user" title={"Dashboard"} /> */}


                <Sidebar title={"Dashboard"} userName={app.state.currentUserName} app={app} />


                <div className="main-content-container px-4 pb-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="Quarantine Progress"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                        <div class="alert alert-dark" role="alert">
                            Your self-isolation started at {app.state.quarantineStartDate}
                        </div>
                        
                        <div>
                            <div className="col col-lg-8">
                                <ProgressCheck />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <PageTitle
                                sm="4"
                                title="COVID-19 related:(1 tip and a news a day)"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ContentCard category="Tips" component={this} />
                            </div>
                            <div className="col-lg-6">
                                <ContentCardNews category="News" component={this}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    updateCal = (e) => {
        e.preventDefault();
        /* TODO: Add servel call */
        this.setState({
            visible: true,
        });
    };
}

export default Dashboard;
