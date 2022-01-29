import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigations from "./navigations/AuthNavigations";
import HomeNavigations from "./navigations/HomeNavigations";

export default function App() {
  const [userToken, setUserToken] = React.useState(null);
  return (
    <NavigationContainer>
      {userToken ? (
        <HomeNavigations />
      ) : (
        <AuthNavigations screenOptions={{ headerShown: false }} />
      )}
    </NavigationContainer>
  );
}
