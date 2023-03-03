import React, { Component } from "react";
import Header from "./components/header";
import NewDish from "./components/newDish";
import data from "./assets/data/dishes.json";
import Dishes from "./components/dishes";


import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // Inicializar el estado con un array vacío o con los datos del JSON
    this.state = {
      dishes: data.dishes,
    };
  }

  newDish = (dish) => {
    console.log("Nuevo platillo:", dish);
    this.setState((prevState) => ({ dishes: [...prevState.dishes, dish] }));
  };

  showDishes = (e) => {
    e.preventDefault();
    this.props.history.push("/platillos");
  };

  addDish = (dishName) => {
    console.log("Nuevo platillo: " + dishName);
    // Crear una copia del array de platillos
    const newDish = {
      id: this.state.dishes.length + 1,
      name: dishName,
      country: "Argentina",
      ingredients: ["Semilla", "Palo", "Mate"],
    };
    // Agregar el nuevo platillo al final del array
    const updatedDishes = [...this.state.dishes, newDish];
    // Actualizar el estado con el nuevo array
    this.setState({ dishes: updatedDishes });
  };

  updateDish = (index, updatedName) => {
    let newState = { ...this.state };
    newState.dishes[index].name = updatedName;

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NewDish onAddDish={this.addDish} />

        <Dishes data={this.state.dishes} updateDish={this.updateDish} />
        {/*     <Button variant="contained" color="secondary" onClick={this.showDishes}>
          Elegir
        </Button> */}

      </div>
    );
  }


}



export default App;
