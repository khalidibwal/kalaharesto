import React,{useState,useEffect} from 'react'
import {View, Text,StyleSheet,ScrollView, TouchableOpacity, ImageBackground, Image} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import IconHomes from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Icon, Button, FAB } from 'react-native-elements';
import Frow from '../Resource/Component/Card/Frow'
import { HomeTab } from './Component/Tab/HomeTab';


export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      images: [
        require('../assets/slider/gall-den6.jpg'),
        require('../assets/slider/gall-wharf.jpg'),
        require('../assets/slider/gall-pier.jpg')
      ],
      desc: ['Hello', 'My'],
      banner:[
        require('../assets/slider/event-1.jpg'),
        require('../assets/slider/event-2.jpg'),
        require('../assets/slider/event-3.jpg')
      ],
      name:''
    }
  }

  render(){
    return(
        <ImageBackground
        style={{flex: 1}}
        source={require('../assets/bg/background4.jpeg')}>    
        <SliderBox
          images={this.state.images}
          autoplay
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          circleLoop
          resizeMode='cover'
          sliderBoxHeight={200}
        />    
          <Frow navigation={this.props.navigation} />
        <SliderBox
          images={this.state.banner}
          resizeMode={'cover'}
          style={Styles.sliderStyle}
        />

        <HomeTab navigation={this.props.navigation}/>
                
        <TouchableOpacity
        style={Styles.iconChat}>
          <FAB
          icon={<Icon name='chat' color='#FFFFFF50' />}
          color='#425E5B'
          onPress={()=>this.props.navigation.navigate('Chating')} />
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const Styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection: "row",
},
cardStyle:{
    borderRadius:10,
},
iconStyle:{
    alignSelf:'center'
},
  sliderStyle:{
  width:'auto',
  height:110,
  borderRadius:10,
  marginTop:15,
  justifyContent:'space-between',
  padding:10
  },
  iconChat:{
    position:'absolute',
    right:10,
    bottom:50,
    alignSelf:'flex-end'
  },
  banners:{
    position:'absolute',
    left:0,
    right:0,
    bottom:0
  }
})