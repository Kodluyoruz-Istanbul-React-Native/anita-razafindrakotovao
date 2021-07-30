import React, { Component } from "react";
import {View, Text, TextInput, Image, Button, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  logo: {
    width: "100%",
    height: 200
  },
  texts: {
    textAlign: "center",
    padding: 10,
  },
  whiteText: {
    color: "white",
  },
  blueText: {
    color: "blue",
  },
  username: {
    paddingTop: 25,
  },
  input: {
    color: "darkgray",
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  login: {
    margin: 25,
    marginLeft: 25,
    marginRight: 25,
  },
  register: {
    color: "green",
  },
  normalText: {
    color: "white",
    textAlign: "center",
  },
  


});

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
      <View style={styles.container}>
        <Image 
          source = {require("./header.png")}
          style={styles.logo}/>
        <Text
        style= {styles.texts}>
          <Text
          style={styles.whiteText}>English </Text>
          <Text
          style={styles.whiteText}>* Türkçe *</Text>
          <Text
          style={styles.blueText}> More</Text>
        </Text>
        
        
        <TextInput
        style = {styles.input}>
          Phone number or email address</TextInput>
        <TextInput
        style = {styles.input}> Password</TextInput>
        <Button
          title="Log In"
          style = {styles.login}
        />
        <Text
        style={styles.normalText}>
          Forgotten password?</Text>

        <Text
        style={styles.normalText}>
          Or</Text>

        <Button
          title="Create New Facebook Account"
          style = {styles.register}
        />

      </View>
    );

  }
}
export {App};