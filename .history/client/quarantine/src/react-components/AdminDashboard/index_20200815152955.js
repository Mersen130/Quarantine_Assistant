import React, { Component } from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import StatCard from "./StatCard";
import UserByGender from "./DivisionChart.js";
import { UserByRegion } from "./userByRegion";
import "./stats.css";
import StatCardDoc from "./StatCardDoc.js";
export class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <SidebarAdmin title={"Dashboard"} />

                <div className="main-content-container px-4 pb-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="Admin Overview"
                                subtitle="Dashboard"
                                className="text-sm-left"
                            />
                        </div>

                        <div className="row">
                            
                            <StatCard
                                
                            />
                            <StatCardDoc
                                
                            />

                            
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}


export default AdminDashboard;
