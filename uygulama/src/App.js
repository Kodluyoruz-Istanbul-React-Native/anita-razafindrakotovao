import React, { Component } from "react";
import {View, Text, TextInput} from "react-native";
import {Soyad} from "./Soyad";

let x = "test";

class App extends Component {
  
  constructor(props){
    super(props);

  }
  state = {
    isim:""
  };
  myState = {
    isim: "",
    yas: 30
  };
  setMyState(newState){
    this.myState = {
      ...this.myState,
      ...newState
    }
    this.forceUpdate();
  }
  
  componentDidMount(){

  }
  componentDidUpdate(prevProps, prevState){

  }
  componentWillUnmount(){

  }
  render(){
    const {isim}=this.state;
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
        }}
        >
          Adınızı giriniz:
        </Text>
        <Text
        style={{
          color: "black",
          fontSize: 10,
          padding: 10
        }}
        >
          Hoş geldiniz {isim}
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
        }}
        onChangeText={(d)=>{
          const tmp = {isim:d};
          this.setMyState({
            isim:d
          })
        }}
        >
          
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