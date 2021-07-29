import React, { Component } from "react";
import {View, Text} from "react-native";

class App extends Component {
  constructor(props){
    super(props);

  }
  
  componentDidMount(){

  }
  componentDidUpdate(prevProps, prevState){

  }
  componentWillUnmount(){

  }
  render(){
    return (
      <View
      style={{
        flex:1,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center"
      }}
      >
        <Text
        style={{
          fontWeight: "bold",
          color: "black",
          fontSize: 20,
          backgroundColor: "white",
          borderRadius: 5,
          padding: 10
        }}>
          Adınızı giriniz:
        </Text>
      </View>
    );
  }
}

export {App};