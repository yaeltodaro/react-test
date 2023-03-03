import React, { Component } from "react";
import { Fab, TextField } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";


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


export default NewDish;
