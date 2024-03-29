import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import Menu from 'react-native-vector-icons/Entypo';

const Titleheader = (props) =>{
    
    return(
        <>
            <View style={styles.container}>
            <Image style={styles.mypict} source={require('../../assets/slider/gall-pier.jpg')}/>
            <Text style={styles.myfont}>MY KALAHA POINTS</Text>
            <Text style={styles.mypoint}>0 POINTS</Text>
            </View>
        </>       
    )
}



const styles = StyleSheet.create({
    iconsize:{
        width:66,
        height:50,
        marginLeft:150,
        marginRight:100,
    },
    container:{
        flexDirection:'column'
    },
    myfont:{
        color:'grey',
        left:30,
        fontSize:10,
        fontWeight:'bold',
        fontFamily:'serif',
        marginLeft:25
      },
    mypoint:{
        color:'grey',
        left:30,
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'serif',
        marginLeft:25
      },
    mypict:{
        width:50,
        height:50,
        alignSelf: 'flex-end',
        marginTop: -5,
        position: 'absolute',
        left:-10
    },
    topright:{
        width:30,
        height:30,
        alignSelf: 'flex-end',
        position: 'absolute',
        left:300
    }
})

export default Titleheader;