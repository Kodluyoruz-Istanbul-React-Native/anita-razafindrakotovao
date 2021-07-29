import React, { Component } from "react";
import {View, Text, TextInput} from "react-native";
import {Soyad} from "./Soyad";

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
        <TextInput
        style={{
          fontWeight: "bold",
          color: "black",
          fontSize: 20,
          backgroundColor: "white",
          borderRadius: 5,
          padding: 10,
          marginTop: 5,
          width: "75%"
        }}>
          
        </TextInput>
        <Soyad
        stil={{
          ustBosluk: 20,
          renk: "blue"
        }}
        />
      </View>
    );
  }
}

export {App};