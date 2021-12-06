import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import Menu from 'react-native-vector-icons/Entypo';

const Titleheader = (props) =>{
    
    return(
        <View style={styles.container}>
            <Image
            source={require('../../assets/icon/fnb.jpg')}
            style={styles.iconsize}/>
        </View>
    )
}



const styles = StyleSheet.create({
    iconsize:{
        width:66,
        height:50,
        marginLeft:100,
        marginRight:30
    },
    container:{
        flexDirection:'row'
    }
})

export default Titleheader;