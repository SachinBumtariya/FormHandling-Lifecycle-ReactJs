import React, { Component } from "react";
import { PureComponent } from "react";
import "./App.css";
import Form from "./Components/Form";
import FragmentDemo from "./Components/FragmentDemo";
import LifeCycleA from "./Components/LifeCycleA";
import ParentComp from "./Components/ParentComp";
import Table from "./Components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <LifeCycleA />
        <FragmentDemo />
        <Table />
        <PureComponent />
        <ParentComp />
      </div>
    );
  }
}

export default App;
