import React, { Component } from "react";
export class ContentCard extends Component {
    constructor(props) {
        super(props);
        if (props.category == "Tips") {
            this.state = {
                bgImage: require("./bg1.jpeg"),
                badgeColor: "info",
            };
        } else if (props.category == "News") {
            this.state = {
                
                bgImage: require("./bg2.jpg"),
                badgeColor: "success",
            };
        }
    }
    render() {
        const {component} = this.props;
        console.log(component.state);
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
                            <div className="text-fiord-blue">
                                {! component.state.tips
                                ? <div>No tips in the database</div>
                                : component.state.tips.title
                                }
                            </div>
                        </h5>
                        {/* TODO: Add servel call to retrieve content from public news*/}
                        <p className="card-text d-inline-block mb-3">
                            {! component.state.tips
                                ? <div>Pleas add tips by 'post(/tips)'</div>
                                : component.state.tips.content
                                }
                        </p>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentCard;
