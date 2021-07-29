import React, { Component } from "react";
import {View, Text, TextInput} from "react-native";

class Soyad extends Component {
  
    
    render(){
        const props = this.props;
        const {stil} = props;
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
            color: stil.renk,
            fontSize: 20,
            backgroundColor: "white",
            borderRadius: 5,
            padding: 10
          }}>
            Soyadınızı giriniz:
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
          
        </View>
      );
    }
  }
  
  export {Soyad};