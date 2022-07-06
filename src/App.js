import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import './App.css';
import Homepage from './Pages/Homepage';
import React from "react";


function App() {
  document.title = "cbøjden.dk"
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
