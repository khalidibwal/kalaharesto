

// import React, { useState } from 'react';
// import {View, StyleSheet, Image} from 'react-native'
// import { Input, Button } from 'react-native-elements';
// import { auth } from '../../../config/ChatConfig';
// import Titleheader from '../Titleheader';

// const SignUp = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [avatar, setAvatar] = useState('');

//     const register = (props) => {
//         const {navigate} = props.navigation
//       auth.createUserWithEmailAndPassword(email, password)
//           .then((userCredential) => {
//               // Signed in 
//               var user = userCredential.user;
//             //   props.navigation.navigate('Chating')
//               user.updateProfile({
//                   displayName: name,
//                   photoUrl: avatar ? avatar : "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x",
//               })
//               navigate('Home')
//                   .catch((error) => {
//                       alert(error.message)
//                   })
//           })
//           .catch((error) => {
//               var errorCode = error.code;
//               var errorMessage = error.message;
//               // ..
//               alert(errorMessage);
//           });
//   }
//     return (
//         <View style={styles.container}>
//             <Image
//             source={require('../../../assets/icon/fnb.jpg')}
//             style={styles.iconsize}/>
//             <Input
//                 placeholder='Enter your name'
//                 label='Name'
//                 value={name}
//                 onChangeText={text => setName(text)}
//             />
//             <Input
//                 placeholder='Enter your email'
//                 label='Email'
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//             />
//             <Input
//                 placeholder='Enter your password'
//                 label='Password'
//                 value={password} onChangeText={text => setPassword(text)}
//                 secureTextEntry
//             />
//             {/* <Input
//                 placeholder='Enter your image url'
//                 label='Profile Picture'
//                 value = {avatar}
//                 onChangeText={text => setAvatar(text)}
//             /> */}
//             <Button
//                 title="Sign Up" style={styles.button}
//                 onPress={register}
//             />
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         padding: 10,
//         backgroundColor:'white'
//     },
//     button: {
//         width: 370,
//         marginTop: 10
//     },
//     iconsize:{
//         width:100,
//         height:100
//     }
// })
// export default SignUp;

import React, { Component } from 'react';
// import * as firebase from 'firebase';
// import firebase from "firebase/compat/app"
// import firebase from 'firebase/app';
// import 'firebase/auth'

import { Button, Alert, StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';


class SignUp extends Component {

  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  onTextChange = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  addUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter correct details.')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User account created.')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="grey"/>
        </View>
      )
    }    
    return (
      <View style={styles.formWrapper}>  
        <TextInput
          style={styles.formField}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.onTextChange(val, 'displayName')}
        />      
        <TextInput
          style={styles.formField}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.onTextChange(val, 'email')}
        />
        <TextInput
          style={styles.formField}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.onTextChange(val, 'password')}
          maxLength={20}
          secureTextEntry={true}
        />   

        <Button
          color="blue"
          title="Signup"
          onPress={() => this.addUser()}
        />        

        <Text 
          style={styles.redirectText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already have account ? Signin
        </Text>                          
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 30,
    backgroundColor: '#fff',    
    flexDirection: "column",
  },
  formField: {
    width: '100%',
    alignSelf: "center",
    borderColor: "#444",
    borderBottomWidth: 1,    
    marginBottom: 20,
    paddingBottom: 20,
  },
  redirectText: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 24,    
  },
  loading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',    
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
});

export default SignUp;