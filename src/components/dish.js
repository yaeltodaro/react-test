import React, { Component } from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  IconButton
} from "@mui/material";
import ScatterPlotOutlined from "@mui/icons-material/ScatterPlotOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";
import ListSubheader from '@mui/material/ListSubheader';

class Dish extends Component {
  state = {
    edit: false,
    name: this.props.name
  };

  edit = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
  };

  handleChange = e => {
    const name = e.target.value;
    this.setState({ name });
    this.props.updateDish(this.props.index, name);

  };

  componentDidUpdate() {
    console.log("Componente actualizado");
  }

  render() {
    const { name, ingredients } = this.props;
    const { edit } = this.state;

    return (
      <Card className="card">
        <CardContent>
          <List
            subheader={
              <ListSubheader>
                {edit ? (
                  <TextField
                    label="Platillo Nuevo..."
                    type="text"
                    margin="normal"
                    variant="outlined"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                ) : (
                  name
                )}
              </ListSubheader>
            }
          >
            <IconButton size="small" onClick={this.edit}>
              <EditOutlined />
            </IconButton>
            {ingredients.map((ingredient, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <ScatterPlotOutlined />
                </ListItemIcon>
                <ListItemText primary={ingredient} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }



}

export default Dish;
