import React from "react";
import Formulaire from "./Pages/Formulaire";
import Dashbord from "./Pages/Dashbord";
import { BrowserRouter, Routes ,Route } from "react-router-dom";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Formulaire/> }/>
          <Route path="/Dashbord" element={ <Dashbord/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
