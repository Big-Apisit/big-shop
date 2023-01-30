import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route element={<Default/>}></Route>
      </Routes>
      <Modal />
      </React.Fragment>
  );
}
//Test
export default App;

