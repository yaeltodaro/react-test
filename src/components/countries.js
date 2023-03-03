import React, { Component } from "react";
import { Button } from "@mui/material";
import { Country } from "./country";
import { Link } from "react-router-dom";

export class Countries extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  // Carga Automatico los datos

  /*   componentDidMount() {
    this.getCountries();
  } */

  getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ countries: data });
      })
      .catch((error) => console.log(error));
  };

  delete = (name) => {
    let newState = { ...this.state };
    newState.countries = newState.countries.filter(
      (country) => country.name.common !== name // o country.name.official
    );
    this.setState(newState);
  };

  render() {
    return (
      <div className="paises">
        <Button as={Link} to="/" variant="contained" color="primary">
          Volver a la Home
        </Button>
        <h1>Países</h1>
        <ul className="listado">
          {this.state.countries.map((country, index) => (
            <Country
              key={index}
              name={country.name.common}
              onDelete={this.delete}
            />
            // <Country key={index} name={country.name.official} onDelete={this.delete} />
          ))}
        </ul>

        <Button
          variant="contained"
          color="secondary"
          onClick={this.getCountries}
        >
          Cargar lista
        </Button>
      </div>
    );
  }
}

export default Countries;
