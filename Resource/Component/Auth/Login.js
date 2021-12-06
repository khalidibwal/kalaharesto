// components/login.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebaseSvc from '../../../config/FirebaseSvc';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      name:'',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  onPressLogin = async () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    firebaseSvc.login(user, this.loginSuccess, this.loginFailed);
  };
  loginSuccess = () => {
    console.log('login successful, navigate to chat.');
    this.props.navigation.navigate('Home', {
      name: this.state.name,
      email: this.state.email,
    });
  };
  loginFailed = () => {
    alert('Login failure. Please tried again.');
  };

//   userLogin = () => {
//     if(this.state.email === '' && this.state.password === '') {
//       Alert.alert('Enter details to signin!')
//     } else {
//       this.setState({
//         isLoading: true,
//       })
//       firebase
//       .auth()
//       .signInWithEmailAndPassword(this.state.email, this.state.password)
//       .then((res) => {
//         console.log(res)
//         console.log('User logged-in successfully!')
//         this.setState({
//           isLoading: false,
//           email: '', 
//           password: ''
//         })
//         this.props.navigation.navigate('Home')
//       })
//       .catch(error => this.setState({ errorMessage: error.message }))
//     }
//   }
onChangeTextEmail = email => this.setState({ email });
onChangeTextPassword = password => this.setState({ password });



  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>
        <Text style={styles.loginLogo}>Login</Text>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.onChangeTextEmail(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.onChangeTextPassword(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => this.onPressLogin()}
        />   

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          Don't have account? Click here to signup
        </Text>                          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  loginLogo:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    marginBottom:25,
    fontSize:50
  }
});

