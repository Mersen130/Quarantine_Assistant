import React, { Component } from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import StatCard from "./StatCard";
import UserByGender from "./DivisionChart.js";
import { UserByRegion } from "./userByRegion";
import "./stats.css";
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

                        {/* overview cards*/}
                        {/* TODO: Add servel call to retrieve stat from DB*/}
                        <div className="row">
                            
                                <div className="col-lg mb-4">
                                    <StatCard
                                        label={stats.label}
                                        value={stats.value}
                                        percentage={stats.percentage}
                                        increase={stats.increase}
                                    />
                                </div>
                         
                        </div>
                        <div className="row">
                            
                            <div className="col-lg mb-4">
                                <StatCardDoc
                                    label={stats.label}
                                    value={stats.value}
                                    percentage={stats.percentage}
                                    increase={stats.increase}
                                />
                            </div>
                     
                    </div>
                        {/* <div className="row">
                            {this.props.categoryData.map((cat, idx) => (
                                <div lg="4" className="col col-lg-4 col-mb-4">
                                    <UserByGender
                                        title={cat.title}
                                        chartData={cat.chartData}
                                    />
                                </div>
                            ))}
                            <div className="col mb-4 col-lg-4 col-sm-12 col-md-12">
                                <UserByRegion />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AdminDashboard;
