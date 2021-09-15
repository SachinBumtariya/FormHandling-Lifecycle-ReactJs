import React, { Component } from "react";
// import { PureComponent } from "react";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";
// import FocusInput from "./Components/FocusInput";
import FRParentInput from "./Components/FRParentInput";
import Hero from "./Components/Hero";
// import Form from "./Components/Form";
// import FragmentDemo from "./Components/FragmentDemo";
// import LifeCycleA from "./Components/LifeCycleA";
// import ParentComp from "./Components/ParentComp";
// import RefsDemo from "./Components/RefsDemo";
// import Table from "./Components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form />
        <LifeCycleA />
        <FragmentDemo />
        <Table />
        <PureComponent />
        <ParentComp /> */}
        {/* <RefsDemo/> */}
        {/* <FocusInput /> */}
        <FRParentInput />
        <ErrorBoundary>
          <Hero heroName="Batman" />
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
