import React, { Component } from "react";
export class ContentCard extends Component {
    constructor(props) {
        super(props);
        if (props.category == "Tips") {
            this.state = {
                title: "How to efficiently self-isolate",
                body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                date: "24 June 2020",
                bgImage: require("./bg1.jpeg"),
                badgeColor: "info",
            };
        } else if (props.category == "News") {
            this.state = {
                title: "Today COVID trends in Canada",
                body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                date: "24 June 2020",
                bgImage: require("./bg2.jpg"),
                badgeColor: "success",
            };
        }
    }
    render() {
        return (
            <div>
                <div className="card small card-post card-post--1">
                    <div
                        className="card-post__image"
                        style={{
                            backgroundImage: `url('${this.state.bgImage}')`,
                        }}
                    >
                        <span
                            className={
                                "card-post__category badge-pill badge-" +
                                this.state.badgeColor
                            }
                        >
                            {"Covid-19 " + this.props.category}
                        </span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <a className="text-fiord-blue" href="#">
                                {this.state.title}
                            </a>
                        </h5>
                        {/* TODO: Add servel call to retrieve content from public news*/}
                        <p className="card-text d-inline-block mb-3">
                            {this.state.body}
                        </p>
                        <span className="text-muted">{this.state.date}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentCard;
