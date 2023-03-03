import React, { Component } from "react";
import { Fab, TextField } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

// // Opción 1: usar propiedad de clase

/* class NewDish extends Component {
  newDish = React.createRef(); // crear la referencia

  addDish = (event) => {
    console.log("Agregar platillo");
    event.preventDefault();
    console.log(this.newDish.current.value); // acceder al valor de la referencia
    this.props.onAddDish(this.newDish.current.value); // pasar el valor a la función padre
    this.newDish.current.value = ""; // limpiar el valor
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.addDish}>
        <TextField
          label="Platillo..."
          type="text"
          margin="normal"
          variant="outlined"
          inputRef={this.newDish} // asignar la referencia al input
        />
        <Fab
          color="primary"
          size="medium"
          className="dish-form-icon"
          onClick={this.addDish}
        >
          {" "}
          <AddIcon />
        </Fab>
      </form>
    );
  }
} */




 // Opción 2: usar argumento de función
 class NewDish extends Component {

  newDish = React.createRef();
  
  addDish = event => {
     console.log("Agregar platillo");
     event.preventDefault();
     console.log(this.newDish.value); // acceder al valor de la referencia
     this.props.onAddDish(this.newDish.value); // pasar el valor a la función padre
     this.newDish.value = ""; // limpiar el valor
   };

   render() {
     return (
       <form autoComplete="off" onSubmit={this.addDish}>
         <TextField
           label="Platillo..."
           type="text"
           margin="normal"
           variant="outlined"
           inputRef={e => (this.newDish = e)} // crear y asignar la referencia al input
         />
         <Fab
           color="primary"
           size="medium"
           className="dish-form-icon"
           onClick={this.addDish}
         >
           <AddIcon />
         </Fab>

       </form>
     );
   }
 }

// ----------------------------

// class NewDish extends Component {
//   // constructor() {
//   //   super();
//   //   this.addDish = this.addDish.bind(this);
//   // }

//   newDish = React.createRef();

//   addDish = event => {
//     console.log("Agregar platillo");
//     event.preventDefault();
//     console.log(this.newDish.current.value);
//     console.log(this.newDish.value);
//     this.props.onAddDish(this.newDish.value);
//     this.newDish.value = "";
//   };

//   render() {
//     return (
//       <form autoComplete="off" onSubmit={this.addDish}>
//         {/* <input ref={this.newDish} /> */}

//         <TextField
//           label="Platillo..."
//           type="text"
//           margin="normal"
//           variant="outlined"
//           inputRef={e => (this.newDish = e)}
//         />
//         <Fab
//           color="primary"
//           size="medium"
//           className="dish-form-icon"
//           onClick={this.addDish}
//         >
//           <AddIcon />
//         </Fab>

//       </form>
//     );
//   }
// }

export default NewDish;
