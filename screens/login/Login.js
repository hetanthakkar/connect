import React from "react";
import { BackHandler, View } from "react-native";
import firebase from "firebase";
import { Provider } from "react-redux";
import Myform from "./ourform";
import store from "./store";
import styles from "./style/styles";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class Login extends React.Component {
  componentDidMount() {
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
    this.setState({ fname: "", flag: 1 });

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  state = {
    email: "",
    password: "",
  };
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Myform navigation={this.props.navigation} />
        </Provider>
      </View>
    );
  }
}
