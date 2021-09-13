//child component of lifecycle A
import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sachin",
    };
    console.log("LifeCycleB Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB GetDerivedStateFromProps");
    return true;
  }
  shouldComponentUpdate() {
    console.log("LifeCycleB ShouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapShotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }
  componentDidMount() {
    console.log("LifeCycleB ComponentDidMount");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>Life Cycle B</div>;
  }
}

export default LifeCycleB;
