import React, { useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import AllFoods from "../../Data/foods.json";
import FoodItem from "../FoodItem/FoodItem";
import { Link } from "react-router-dom";
import "./Foods.css";
const Foods = () => {
  const [food, setFood] = useState([]);
  const [setFooItem, setFoodItem] = useState("Lunch");

  useEffect(() => {
    setFood(AllFoods);
  }, []);
  const selectedFoods = food.filter((foods) => foods.type === setFooItem);
  return (
    <Container>
      <Nav
        className="justify-content-center"
        variant="pills"
        activeKey="/lunch"
      >
        <Nav.Item>
          <Link
            className="nav-link"
            to="breakfast"
            onClick={() => setFoodItem("Breakfast")}
          >
            Breakfast
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="" onClick={() => setFoodItem("Lunch")}>
            Lunch
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="nav-link"
            to="dinner"
            onClick={() => setFoodItem("Dinner")}
          >
            Dinner
          </Link>
        </Nav.Item>
      </Nav>

      <div className="row my-5">
        {selectedFoods.map((foods) => (
          <FoodItem key={foods.id} foods={foods}></FoodItem>
        ))}
      </div>
    </Container>
  );
};

export default Foods;
