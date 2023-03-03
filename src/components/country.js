import React, { Component } from "react";
import { IconButton } from "@mui/material";
import Delete from "@mui/icons-material/Delete";

export class Country extends Component {
  delete = (name) => {
    this.props.onDelete(name);
  };

  render() {
    return (
      <li>
        <IconButton size="small" onClick={() => this.delete(this.props.name)}>
          <Delete />
        </IconButton>
        {this.props.name}


      </li>
    );
  }
}

export default Country;
