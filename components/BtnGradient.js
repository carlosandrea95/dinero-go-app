import React, { Component } from "react";
import { Text, Pressable } from "react-native";
import baseStyles from "../styles/baseStyles";

export default class btn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Pressable
        style={baseStyles.btnWhite}
        onPress={() => props.navigation.navigate("register")}
      >
        <Text style={baseStyles.btnText}>Crear una cuenta</Text>
      </Pressable>
    );
  }
}
