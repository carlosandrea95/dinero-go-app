import React, { Component } from "react";
import { Pressable, Text, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function BtnIcon(props) {
  const { width, height } = Dimensions.get("window");
  return (
    <Pressable
      style={{
        marginTop: "5%",
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderWidth: 3,
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        width: "40%",
        height: 70,
        justifyContent: "center",
      }}
      onPress={props.onPressFunction}
    >
      <Feather name="user" size={24} style={{ color: props.iconColor }} />
      <Text
        style={{
          color: props.textColor,
          fontWeight: "600",
          fontSize: width / 32,
        }}
      >
        {props.text}
      </Text>
    </Pressable>
  );
}
