import React, { Component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Button as={Link} to="/paises" variant="contained" color="secondary">
          Paises: cargados a traves de API
        </Button>
        <h1>Platillos Típicos</h1>
      </div>
    );
  }
}

export default Header;
