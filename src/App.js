import React, { Component } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import AppNavBar from "./components/AppNavBar";
import AddToDo from "./components/AddToDo";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <AddToDo />
        <ToDoList />
      </div>
    );
  }
}

export default App;
