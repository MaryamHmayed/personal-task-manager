import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './pages/Store/store';


import Login from "./pages/Login/index";
import Register from "./pages/Register";
import Board from "./pages/Board/board";





function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/task-manager" element={<Board/>}/>



      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
