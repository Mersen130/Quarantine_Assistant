import React, { Component } from "react";
export class UserByRegion extends Component {
    render() {
        return (
            <div>
                <div className="card small">
                    {/* TODO: Add servel call to retrieve stat from DB*/}
                    <div className="border-bottom card-header">
                        <h6 className="m-0">{this.props.title}</h6>
                        <div className="block-handle" />
                    </div>

                    <div className="p-0 card-body">
                        <div className="list-group-small list-group-flush small">
                            {this.props.region.map((item, idx) => (
                                <div className="d-flex px-3 list-group-item">
                                    <span className="text-semibold text-fiord-blue">
                                        {item.title}
                                    </span>
                                    <span className="ml-auto text-right text-semibold text-reagent-gray">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UserByRegion.defaultProps = {
    title: "Users by region",
    region: [
        {
            title: "Toronto",
            value: "400",
        },
        {
            title: "Vancouver",
            value: "300",
        },
        {
            title: "Montreal",
            value: "100",
        },
        {
            title: "Ottawa",
            value: "100",
        },
        {
            title: "Calgary",
            value: "100",
        },
        {
            title: "Edmonton",
            value: "100",
        },
        {
            title: "Victoria",
            value: "100",
        },
        {
            title: "Outside Canada",
            value: "34",
        },
    ],
};

export default UserByRegion;
