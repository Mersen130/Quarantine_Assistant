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
                            {this.props.cardsData.map((stats, idx) => (
                                <div className="col-lg mb-4" key={idx}>
                                    <StatCard
                                        label={stats.label}
                                        value={stats.value}
                                        percentage={stats.percentage}
                                        increase={stats.increase}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AdminDashboard.defaultProps = {
    cardsData: [
        {
            label: "Users",
            value: "1234",
            percentage: "4.7%",
            increase: "true",
        },
        {
            label: "Doctors",
            value: "56",
            percentage: "6%",
            increase: "true",
        },
        {
            label: "Questions",
            value: "4321",
            percentage: "3.6%",
            increase: "true",
        },
    ],
    categoryData: [
        {
            title: "Users by gender",
            chartData: {
                datasets: [
                    {
                        hoverBorderColor: "#ffffff",
                        data: [48.3, 51.7],
                        backgroundColor: [
                            "rgba(0,123,255,0.9)",
                            "rgba(0,123,255,0.3)",
                        ],
                    },
                ],
                labels: ["Male", "Female"],
            },
        },
        {
            title: "Users by age",
            chartData: {
                datasets: [
                    {
                        hoverBorderColor: "#ffffff",
                        data: [45.5, 35.5, 19],
                        backgroundColor: [
                            "rgba(230, 161, 74,0.9)",
                            "rgba(230, 161, 74,0.6)",
                            "rgba(230, 161, 74,0.3)",
                        ],
                    },
                ],
                labels: ["18-25", "25-40", ">40"],
            },
        },
    ],
};
export default AdminDashboard;
