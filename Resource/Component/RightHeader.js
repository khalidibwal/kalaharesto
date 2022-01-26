import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import Menu from 'react-native-vector-icons/Entypo';

const RightHeader = (props) =>{
    
    return(
        <>
            <View style={styles.container}>
            <TouchableOpacity onPress={()=> props.navigation.navigate('Chating')}>
            <Image source={require('../../assets/bg/bgmsg.png')}
            style={styles.topright}/>
            </TouchableOpacity>
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
        right:10
    }
})

export default RightHeader;