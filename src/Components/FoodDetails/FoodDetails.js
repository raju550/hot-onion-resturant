// @ts-nocheck
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AllFoods from "../../Data/foods.json";
import "./FoodDetails.css";
const FoodDetails = (props) => {
  // @ts-ignore
  let { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const currentFood = AllFoods.find((food) => food.id == id);
  const [selectedBigImg, setSelectedBigImg] = useState(currentFood.images[0]);
  return (
    <Container>
      <div className="row single-item d-flex align-items-center">
        <div className="col-md-6">
          <h1>L{currentFood.name}</h1>
          <small>{currentFood.fullDescription}</small>
          <br />
          <div className="d-flex my-4 justify-content-start">
            <h2 className="price">${currentFood.price.toFixed(2)}</h2>
            <div className="ml-3 btn btn-item">
              <button
                className="btn-style"
                onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              {quantity}
              <button
                className="btn-style"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <br />
          <div>
            <button type="button" className="btn btn-danger">
              Add Cart
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center ">
          <img className="single-image" src={currentFood.images} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default FoodDetails;
