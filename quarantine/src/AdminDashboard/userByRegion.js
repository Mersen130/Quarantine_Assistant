import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect,
} from "shards-react";

export class UserByRegion extends Component {
  render() {
    return (
      <div>
        <Card small>
          <CardHeader className="border-bottom">
            <h6 className="m-0">{this.props.title}</h6>
            <div className="block-handle" />
          </CardHeader>

          <CardBody className="p-0">
            <ListGroup small flush className="list-group-small">
              {this.props.region.map((item, idx) => (
                <ListGroupItem key={idx} className="d-flex px-3">
                  <span className="text-semibold text-fiord-blue">
                    {item.title}
                  </span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">
                    {item.value}
                  </span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
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
