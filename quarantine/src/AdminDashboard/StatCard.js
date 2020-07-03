import React, { Component } from "react";

import classNames from "classnames";
import { Card, CardBody } from "shards-react";

class StatCard extends Component {
  render() {
    return (
      <div>
        <Card small className="stats-small stats-small--1">
          <CardBody className="p-0 d-flex">
            <div className="d-flex flex-column m-auto">
              <div className="stats-small__data text-center">
                <span className="stats-small__label text-uppercase">
                  {this.props.label}
                </span>
                <h6 className="stats-small__value count my-3">
                  {this.props.value}
                </h6>
              </div>
              <div className="stats-small__data">
                <span className="stats-small__percentage stats-small__percentage--increase">
                  {this.props.percentage}
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default StatCard;
