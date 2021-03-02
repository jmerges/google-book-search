import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./pages/Search";


function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Route exact path="/" component={Books} />
      <Route exact path="/search" component={Search} />
    </Router>
  );
}


export default App;
