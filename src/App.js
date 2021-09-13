import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import LifeCycleA from "./Components/LifeCycleA";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <LifeCycleA />
      </div>
    );
  }
}

export default App;
