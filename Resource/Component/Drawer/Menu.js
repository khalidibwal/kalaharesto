import React,{useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet, Button, Alert} from 'react-native'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { auth } from '../../../config/ChatConfig';



export default function Menu(props){
  const user = firebase.auth().currentUser;
  const {navigate} = props.navigation
  const signOut = () => {
    // Sign-out successful.
    Alert.alert(
      'Log out',
      'Do you want to logout?',
      [
        {text: 'Cancel'},
        {text: 'Confirm', onPress: () => {
          auth.signOut()
          navigate('Login')
        }},
      ],
      { cancelable: true }
    )
}
    return(
    // <DrawerContentScrollView {...props}>
    <ScrollView>
      <View
      style={{
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image 
            source={require('../../../assets/icon/fnb.jpg')}
            style={styles.iconsize}/>
            {user ? <Text>Welcome, {user.displayName}</Text> :<Text>Welcome Guest</Text>}
    </View>
      <DrawerItemList {...props} />
      {user==null ?<Button title='Login' onPress={()=>navigate('Login')}></Button>:<Button title='SignOut' onPress={signOut}></Button>}
    </ScrollView>
    
    )
}
const styles = StyleSheet.create({
  txttocenter:{
      textAlign:'center'
  },
  iconsize:{
      width:66,
      height:50,
      marginLeft:'auto',
      marginRight:'auto'
  }
})
