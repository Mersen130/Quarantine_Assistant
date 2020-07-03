import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from "shards-react";

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
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="200"
            ref={this.canvasRef}
            className="blog-users-by-device  my-3"
          />
        </CardBody>
      </Card>
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
