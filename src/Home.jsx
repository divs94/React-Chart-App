import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home_section">
      <p
            style={{
              width: "700px",
              marginLeft: "70px",
              color: "white",
              background: "#333",
              padding: "25px",
              opacity:"1"
            }}
          >
            "pizza, dish of Italian origin consisting of a flattened disk of
            bread dough topped with some combination of olive oil, oregano,
            tomato, olives, mozzarella or other cheese, and many other
            ingredients, baked quickly—usually, in a commercial setting, using a
            wood-fired oven heated to a very high temperature—and served hot..." <br/><br/>
            <strong style={{fontSize:"20px"}}>
                Here you can check what's the current selling of Pizza's in Market across the World Every Second!!</strong>
          </p>
        <div>
          <h1>Welcome to Pizza Analytics World!!</h1>
        </div>
        <div>
          <Link to="/chart">
            <button className="btn">Go to Chart</button>
          </Link>
        </div>
      </div>
    </>
  );
}
