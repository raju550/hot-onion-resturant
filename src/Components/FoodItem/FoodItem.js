import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FoodItem.css";
const FoodItem = ({ foods }) => {
  const { id, name, shortDescription, price, images } = foods;
  return (
    <Row className="col-md-4 mb-4 text-center ">
      <Link className="item-list" to={"foods/" + id}>
        <Col>
          <Card>
            <Card.Img
              className="img-item m-auto"
              variant="top"
              src={images[0]}
            />
            <Card.Body className="all-item">
              <Card.Title>{name}</Card.Title>
              <Card.Text>{shortDescription}</Card.Text>
              <Card.Text>${price.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Link>
    </Row>
  );
};

export default FoodItem;
//  <div className="card text-center">
//    {/* <img src={images[0]} alt="" className="card-img-top" /> */}
//    <div className="card-body">
//      <h5>{name}</h5>
//      <p>{shortDescription}</p>
//      <h4>${price.toFixed(2)}</h4>
//    </div>
//  </div>;
