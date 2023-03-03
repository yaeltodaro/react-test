import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./../App";
import Dishes from "./dishes";
import Dish from "./dish";
import Countries from "./countries";
import NotFound from "./notFound";

import { Routes ,Route, Navigate } from 'react-router-dom';


const Router = () => (
  <BrowserRouter basename="/react-test/">
     <Routes>
       <Route path='/' element={<App/>} />
       <Route path="/platillos" element={<Dishes/>} />
       <Route path="/platillo/:name" element={<Dish/>} />
       <Route path="/react-test/paises" element={<Countries/>} />
       <Route path="*" element={<Navigate to="/" />} />
       <Route component={NotFound} />
     </Routes>
   </BrowserRouter>
 );
 

 
export default Router;


