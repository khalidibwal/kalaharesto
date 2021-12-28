import React from 'react';
import IconHomes from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native'
import { Card } from 'react-native-elements';
import { contextTypes } from 'react-native-scrollable-tab-view-forked/DefaultTabBar';

export default class Frow extends React.Component{
    constructor(props){
        super(props)
        console.log(props,'props')
        
    }


    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={Styles.container}>
            <Card containerStyle={Styles.cardStyle}>
                    <TouchableOpacity style={Styles.iconStyle} onPress={()=> navigate('Food')}>
                    <Image source={require('../../../assets/icon/menu.png')} style={Styles.iconChat}/>
                    {/* <Text style={Styles.textfont}>Menu</Text> */}
                    </TouchableOpacity>
                </Card>               
                <Card containerStyle={Styles.cardStyle}>
                    <TouchableOpacity style={Styles.iconStyle} onPress={()=> navigate('Reservation')}>
                    <Image source={require('../../../assets/icon/reserve.png')} style={Styles.iconChat}/>
                   
                    </TouchableOpacity>
                </Card>               
                <Card containerStyle={Styles.cardStyle}>
                    <TouchableOpacity style={Styles.iconStyle} onPress={()=> navigate('Location')}>
                    <Image source={require('../../../assets/icon/loc3.png')} style={Styles.iconChat}/>
                    {/* <Text style={Styles.textfont}>Location</Text> */}
                    </TouchableOpacity>
                </Card> 
                <Card containerStyle={Styles.cardStyle}>
                    <TouchableOpacity style={Styles.iconStyle}>
                    <Image source={require('../../../assets/icon/event.png')} style={Styles.iconChat}/>
                    {/* <Text style={Styles.textfont}>Location</Text> */}
                    </TouchableOpacity>
                </Card> 
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container:{
      display: "flex",
      flexDirection: "row",
      alignSelf:'center'
  },
  cardStyle:{
      borderRadius:20,
      width:70,
      height:80
  },
  iconStyle:{
      alignSelf:'center'
  },
    sliderStyle:{
      width:'auto',
      height:100,
      marginTop:10,
      borderRadius:20
    },
    iconChat:{
        width:50,
        height:50
    },
    textfont:{
        fontSize:10,
        textAlign:'center'
    }
  })