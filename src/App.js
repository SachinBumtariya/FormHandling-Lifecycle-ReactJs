import React, { Component } from "react";
// import { PureComponent } from "react";
import "./App.css";
// import FocusInput from "./Components/FocusInput";
import FRParentInput from "./Components/FRParentInput";
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
        <FRParentInput/>
      </div>
    );
  }
}

export default App;
