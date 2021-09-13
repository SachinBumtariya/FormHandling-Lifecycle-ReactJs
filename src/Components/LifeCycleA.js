import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sachin",
    };
    console.log("LifeCycleA Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA GetDerivedStateFromProps");
    return true;
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA ShouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapShotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }
  componentDidMount() {
    console.log("LifeCycleA ComponentDidMount");
  }

  changeState = () => {
    this.setState({
      name: "Sachin007",
    });
  };
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>Life Cycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
