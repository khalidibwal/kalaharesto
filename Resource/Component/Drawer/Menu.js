import React,{useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';


export default function Menu(props){
  const user = firebase.auth().currentUser;
  // const isSignin = firebase.auth().currentUser.displayName
  // console.log(isSignin,'sign in')
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
