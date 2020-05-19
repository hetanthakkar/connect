import React from "react";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";
import ForgetPassword from "./screens/forgetpassword/ForgetPassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./screens/mainpage/main";
import Pic from "./screens/pic/Pic";
import Select from "./screens/select/index";
import Skill from "./screens/skills/index";
import Profile from "./screens/profile/profile";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { YellowBox, TouchableWithoutFeedback, Keyboard } from "react-native";
import firebase from "firebase";
import firebaseConfig from "../auth/screens/helper/firbaseconfig/firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
import _ from "lodash";
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

import { StyleSheet, Text, View, Image } from "react-native";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      Signup: Signup,
      ForgetPassword: ForgetPassword,
      Main: Main,
      Pic: Pic,
      Select: Select,
      Skill: Skill,
      Profile: Profile,
    },
    {
      initialRouteName: "Profile",
    }
  )
);
