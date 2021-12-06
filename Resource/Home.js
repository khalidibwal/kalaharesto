import React,{useState,useEffect} from 'react'
import {View, Text,StyleSheet,ScrollView, TouchableOpacity, ImageBackground, Image} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import IconRow from './Component/Icons/IconRow';
import SecondRow from './Component/Icons/SecondRow';

import { Card, ListItem, Icon, Button, FAB } from 'react-native-elements'




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
          sliderBoxHeight={300}
        />    
        <SliderBox
          images={this.state.banner}
          autoplay
          circleLoop
          style={Styles.sliderStyle}
          resizeMode={'cover'}
        />
        <ScrollView>
          <Card containerStyle={Styles.cardstyle}>
            <Card.Image source={require('../assets/icon/foodmenu.jpg')}>
            </Card.Image>
            <Card.Divider />
            <Button
                icon={<Icon name='code' color='#FFFFFF50' />}
                buttonStyle={{color:'#FFFFFF50', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='OUR MENU'
                onPress={()=>this.props.navigation.navigate('Food')} />
          </Card>
          <Card containerStyle={Styles.cardstyle}>
            <Card.Image source={require('../assets/icon/reserv.jpg')}>  
            </Card.Image>
            <Card.Divider/>
            <Button
                icon={<Icon name='code' color='#FFFFFF50' />}
                buttonStyle={{color:'#FFFFFF50', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='RESERVATION'
                onPress={()=>this.props.navigation.navigate('Reservation')}  />
          </Card>
          <Card containerStyle={Styles.cardstyle}>        
            <Card.Image source={require('../assets/icon/loc.jpg')}>       
            </Card.Image>
            <Card.Divider/>
            <Button
                icon={<Icon name='code' color='#FFFFFF50' />}
                buttonStyle={{color:'#FFFFFF50', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='LOCATION'
                onPress={()=>this.props.navigation.navigate('Location')}  />
          </Card>
          <Card containerStyle={Styles.cardstyle}>        
            <Card.Image source={require('../assets/icon/coupon.png')}>       
            </Card.Image>
            <Card.Divider/>
            <Button
                icon={<Icon name='code' color='#FFFFFF50' />}
                buttonStyle={{color:'#FFFFFF50', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Coupon' 
                onPress={()=>this.props.navigation.navigate('Coupon')}/>
          </Card>
        </ScrollView>
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
  cardstyle:{
    borderRadius:10,
    backgroundColor:'#FFFFFF50',
  },
  sliderStyle:{
    width:'auto',
    height:100,
    marginTop:10,
    borderRadius:10
  },
  iconChat:{
    position:'absolute',
    right:10,
    bottom:30,
    alignSelf:'flex-end'
  }
})