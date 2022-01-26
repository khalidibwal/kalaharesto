import React,{useState,useEffect} from 'react'
import {View, Text,StyleSheet,ScrollView, TouchableOpacity, ImageBackground, Image} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import IconHomes from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Icon, Button, FAB } from 'react-native-elements';
import Frow from '../Resource/Component/Card/Frow'
import { HomeTab } from './Component/Tab/HomeTab';
import Carousel from 'react-native-snap-carousel';


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
      carouselItems: [
        {
          type: "THE DEN OF KALAHA",
          image: require('../assets/slider/gall-den6.jpg')
        },
        {
          type: "THE PIER BY KALAHA",
          image: require('../assets/slider/gall-pier.jpg')
        },
      ],

      name:''
    }
  }

  _renderItem({item,index}){
    return (
      <View>
            <Image source={item.image} style={Styles.renderImage}/>
            <Text style={Styles.myfont}>{item.type}</Text>
      </View>

    )
}

  render(){
    return(
      <ScrollView>
        <ImageBackground
        style={{flex: 1}}
        source={require('../assets/bg/bg11.jpeg')}>    
 
        <SliderBox
          images={this.state.banner}
          resizeMode={'cover'}
          style={Styles.sliderStyle}
        />
        <Text style={Styles.fontStyle}>ORDER FOOD AND BEVERAGES</Text>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
        <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  </View>
      </ImageBackground>
      </ScrollView>
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
  height:190,
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
  },
  fontStyle:{
    marginTop:15,
    marginBottom:15,
    color:'grey',
    left:30,
    fontSize:12,
    fontWeight:'bold',
    fontFamily:'serif'
  },
  myfont:{
    color:'grey',
    left:30,
    fontSize:12,
    fontWeight:'bold',
    fontFamily:'serif'
  },
  renderImage:{
    width:'auto',
    height: 150
  }
})