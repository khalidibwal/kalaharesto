import React from 'react'
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native'


export default class SecondRow extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
      const {navigate} = this.props.navigation
        return(
          <View style={Styles.container}>
            <TouchableOpacity style={Styles.posleft} onPress={()=> navigate('Food')}>
                <Image source={require('../../../assets/icon/coupon.png')} style={Styles.imgSize}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.posleft} onPress={()=> navigate('Food')}>
                <Image source={require('../../../assets/icon/event.png')} style={Styles.imgSize}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.posleft} onPress={()=> navigate('Food')}>
                <Image source={require('../../../assets/icon/social.png')} style={Styles.imgSize}/>
            </TouchableOpacity>
          </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
      marginRight:'auto',
      marginLeft:'auto',
      flexDirection:'row',
      marginTop:40,
      marginBottom:20
    },
    posleft:{
      marginRight:35,
      marginLeft:35,
    },
    imgSize:{
      height:50,
      width:50,

    }
  })