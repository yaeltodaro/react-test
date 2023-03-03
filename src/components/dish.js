import React, { Component } from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  IconButton,
} from "@mui/material";
import ScatterPlotOutlined from "@mui/icons-material/ScatterPlotOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";
import ListSubheader from "@mui/material/ListSubheader";

class Dish extends Component {
  state = {
    edit: false,
    name: this.props.name,
    ingredients: this.props.ingredients.map((ingredient) => ({
      name: ingredient,
      edit: false, // Agrega la propiedad edit a cada ingrediente
    })),
  };

  edit = () => {
    this.setState((prevState) => ({ edit: !prevState.edit }));
  };

  handleChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
    this.props.updateDish(this.props.index, name);
  };

  // Agrega esta función para cambiar el valor de un ingrediente
  handleChangeIngredient = (index, value) => {
    // Crea una copia del arreglo de ingredientes
    const ingredients = [...this.state.ingredients];
    // Cambia el valor del ingrediente en el índice dado
    ingredients[index].name = value;
    // Actualiza el estado con el nuevo arreglo
    this.setState({ ingredients });
  };

  // Agrega esta función para cambiar la propiedad edit de un ingrediente
  toggleEditIngredient = (index) => {
    // Crea una copia del arreglo de ingredientes
    const ingredients = [...this.state.ingredients];
    // Cambia la propiedad edit del ingrediente en el índice dado
    ingredients[index].edit = !ingredients[index].edit;
    // Actualiza el estado con el nuevo arreglo
    this.setState({ ingredients });
  };

  componentDidUpdate() {
    console.log("Componente actualizado");
  }

  render() {
    const { name, ingredients } = this.state; // Usa el estado en lugar de las props
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
              <ListItem
                button
                key={index}
                onClick={() => {
                  // Llama a la función toggleEditIngredient cuando se haga click en el ingrediente
                  this.toggleEditIngredient(index);
                }}
              >
                <ListItemIcon>
                  <ScatterPlotOutlined />
                </ListItemIcon>
                {/* Usa una condición ternaria para mostrar el campo de entrada o el texto del ingrediente */}
                {ingredient.edit ? (
                  <TextField
                    label="Ingrediente"
                    type="text"
                    value={ingredient.name}
                    onChange={(e) => {
                      // Llama a la función handleChangeIngredient cuando se cambie el valor del ingrediente
                      this.handleChangeIngredient(index, e.target.value);
                      // Llama a la función updateDish para actualizar el plato en el componente padre
                      this.props.updateDish(
                        this.props.index,
                        this.state.name,
                        ingredients.map((ing) => ing.name)
                      );
                    }}
                    onClick={(e) => {
                      // Evita que el evento se propague al componente ListItem al hacer click en el campo de entrada
                      e.stopPropagation();
                    }}
                    onKeyDown={(e) => {
                      // Detecta si se presiona la tecla Enter y cierra el campo de entrada si es así
                      if (e.key === "Enter") {
                        this.toggleEditIngredient(index);
                      }
                    }}
                  />
                ) : (
                  <ListItemText primary={ingredient.name} />
                )}
              </ListItem>
            ))}{" "}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default Dish;
