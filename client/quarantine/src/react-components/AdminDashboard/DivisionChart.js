import React, { Component } from "react";
import Chart from "chart.js";

class UserByGender extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }
    componentDidMount() {
        const chartConfig = {
            type: "pie",
            data: this.props.chartData,
            options: {
                ...{
                    legend: {
                        position: "bottom",
                        labels: {
                            padding: 25,
                            boxWidth: 20,
                        },
                    },
                    cutoutPercentage: 0,
                    tooltips: {
                        custom: false,
                        mode: "index",
                        position: "nearest",
                    },
                },
                ...this.props.chartOptions,
            },
        };

        new Chart(this.canvasRef.current, chartConfig);
    }
    render() {
        const { title } = this.props;
        {
            /* TODO: Add servel call to retrieve stat from DB*/
        }
        return (
            <div className="h-100 card small">
                <div className="border-bottom card-header">
                    <h6 className="m-0">{title}</h6>
                </div>
                <div className="d-flex py-0 card-body">
                    <canvas
                        height="200"
                        ref={this.canvasRef}
                        className="blog-users-by-device  my-3"
                    />
                </div>
            </div>
        );
    }
}

UserByGender.defaultProps = {
    title: "Users by gender",
    chartData: {
        datasets: [
            {
                hoverBorderColor: "#ffffff",
                data: [48.3, 51.7],
                backgroundColor: ["rgba(0,123,255,0.9)", "rgba(0,123,255,0.3)"],
            },
        ],
        labels: ["Male", "Female"],
    },
};
export default UserByGender;
