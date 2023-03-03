import React, { Component } from "react";
import { Grid } from "@mui/material";
import Dish from "./dish.js";

export class Dishes extends Component {
  goBack = (e) => {
    e.preventDefault();
    this.props.history.push("/");
  };

  updateDish = (index, updatedName) => {
    this.props.updateDish(index, updatedName);
  };

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {this.props.data.map((dish, index) => (
            <Dish
              key={index}
              name={dish.name}
              ingredients={dish.ingredients}
              index={index}
              updateDish={this.props.updateDish}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

export default Dishes;
