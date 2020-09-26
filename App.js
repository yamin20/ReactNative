import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, PickerIOSComponent, YellowBox, TextInput, Button, TouchableOpacity } from 'react-native';

  export default class App extends React.Component{
    constructor(){
      super();
      this.state = {
        text: "",
        password: "",
      };
    }
    render(){
      return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image_size} source={require("./assets/user.png")} />
      </View>
      <View style={styles.middle}>
        <TextInput
         onChangeText={(text) => this.setState({text})}
         placeholder="Email Address" 
         style={styles.text_input}
         >
         </TextInput>
        <TextInput 
          secureTextEntry
          placeholder="Password" 
          onChangeText={(password)=>this.setState({password})}
          style={styles.text_input}>
        </TextInput>
  
        <TouchableOpacity>
          <Text>Forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:-20,marginLeft:155}}>
          <Text>New User?SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={{textAlign:"center"}}>
          Or Login With
        </Text>
        <TouchableOpacity style={{flexDirection: "row",marginLeft:70}}>
          <Image source={require('./assets/google.png')} style={styles.google_icon} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:-65,marginLeft:140}}>
          <Image source={require('./assets/facebook.png')} style={styles.google_icon} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:-70,marginLeft: 220}}>
          <Image source={require('./assets/twitter.png')} style={styles.google_icon} />
        </TouchableOpacity>
      </View>
    </View>
  
  );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CD0F8',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  header: {
    flex: 4,
    justifyContent: 'flex-end',
  },
  image_size: {
    width: 100,
    height: 100,
  },
  middle: {
    flex: 3,
    alignItems: "flex-start",
    width: "100%",
    padding: 40,
  },
  text_input: {
    height: 50,
    width: "100%",
    paddingLeft: 16,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    height: 35,
    width: "100%",
    color: "#fff",
  },
  footer:{
    flex: 2,
    width: "100%",
  },
  google_icon:{
    width: 50,
    height: 50,
    marginTop:20,
    
  }
});
