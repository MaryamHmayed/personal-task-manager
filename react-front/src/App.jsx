import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login/index";
import Register from "./pages/Register";
import TaskManager from "./pages/Task-manager/manager";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/task-manager" element={<TaskManager/>}/>



      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
