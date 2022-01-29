import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import welcome from "../screens/auth/WelcomeScreen";
import login from "../screens/auth/SignInScreen";
import register from "../screens/auth/steps/SignUpChooseScreen";
import userStepOne from "../screens/auth/steps/UserStepOneScreen";
import userStepTwo from "../screens/auth/steps/UserStepTwoScreen";
import bissStepOne from "../screens/auth/steps/BissStepOneScreen";
import bissStepTwo from "../screens/auth/steps/BissStepTwoScreen";

const Stack = createStackNavigator();

export default class AuthNavigations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="userStepOne"
          component={userStepOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="userStepTwo"
          component={userStepTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="bissStepOne"
          component={bissStepOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="bissStepTwo"
          component={bissStepTwo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
