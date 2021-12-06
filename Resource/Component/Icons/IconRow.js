import React from 'react'
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native'
export default class IconRow extends React.Component{
    constructor(props){
        super(props)
        console.log('props',props)
    }

    render(){
      const {navigate} = this.props.navigation
        return(
          <View style={Styles.container}>
            <TouchableOpacity style={Styles.posleft} onPress={()=> navigate('Food')}>
                <Image source={require('../../../assets/icon/foodmenu.jpg')} style={Styles.imgSize}/>
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
      marginTop:20,
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