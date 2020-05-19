import React, { Component } from "react";
import { createStore } from "redux";
import { Text } from "react-native";
import { Provider } from "react-redux";
import Layout from "./layout/layout";
import firebase from "firebase";

export const REMOVE = "REMOVE_ITEM";

var firebaseConfig = {
  apiKey: "AIzaSyAfGN94rWhA55dceve-ab5R5nEL6o4xXeg",
  authDomain: "new1-930be.firebaseapp.com",
  databaseURL: "https://new1-930be.firebaseio.com",
  projectId: "new1-930be",
  storageBucket: "new1-930be.appspot.com",
  messagingSenderId: "332990256430",
  appId: "1:332990256430:web:640a6413492c34bf2a96bf",
  measurementId: "G-SBPS6449GM",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const DEFAULT_STATE = {
  todos: [],
  completed: 0,
};
const reducer = (state = DEFAULT_STATE, action) => {
  firebase
    .database()
    .ref("id/number")
    .on("value", (snapshot) => {
      id = snapshot.val() - 1;
      console.log("fetch number is " + id);
    });

  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      console.log("added");
      console.log(state.todos);
      var a = { ...state, todos: [...state.todos, payload.todo] };
      firebase
        .database()
        .ref("user/" + id)
        .update({
          todo: a,
        });

      return a;
    case "REMOVE_ITEM":
      var b = {
        ...state,
        todos: state.todos.filter((item) => item !== payload.todo),
      };
      firebase
        .database()
        .ref("user/" + id)
        .update({
          todo: b,
        });
      return b;
    case "CHANGE_COMPLETE":
      console.log(state.completed);
      return { ...state, completed: state.completed + 1 };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default class Todo extends Component {
  ids = this.props.navigation.getParam("id");
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
