import React, { Component } from "react";
import { View, Text } from "react-native";

export default class StackContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          height: "80%",
          marginTop: "-10%",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: "#fff",
          alignItems: "center",
        }}
      ></View>
    );
  }
}
