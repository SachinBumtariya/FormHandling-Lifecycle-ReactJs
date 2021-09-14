import React, { Component } from "react";
import { PureComponent } from "react";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sachin",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "sachin",
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        parent component
        <RegComp name={this.state.name}></RegComp>
        <PureComponent name={this.state.name}></PureComponent>
      </div>
    );
  }
}

export default ParentComp;
