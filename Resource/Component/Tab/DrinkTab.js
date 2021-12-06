import React from 'react';
import {  StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Cart from 'react-native-vector-icons/FontAwesome'
// import { Card, CardImage, CardTitle, CardContent, CardAction, CardButton } from 'react-native-material-cards'
import { Card, Button, Icon } from 'react-native-elements'
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'

const DATA = [
    {
      image:require('../../../assets/slider/gall-den6.jpg'),
      id: '1',
      title: 'First Item',
    },
    {
        image:require('../../../assets/slider/gall-den6.jpg'),
      id: '2',
      title: 'Second Item',
    },
    {
        image:require('../../../assets/slider/gall-den6.jpg'),
      id: '3',
      title: 'Third Item',
    },
    {
        image:require('../../../assets/slider/gall-den6.jpg'),
      id: '4',
      title: 'Third Item',
    },
    {
        image:require('../../../assets/slider/gall-den6.jpg'),
      id: '5',
      title: 'First Item',
    },
    {
        image:require('../../../assets/slider/gall-den6.jpg'),
      id: '6',
      title: 'Second Item',
    },
    {
        image:require('../../../assets/slider/gall-den6.jpg'),
      id: '7',
      title: 'Third Item',
    }
  ];
export default class DrinkTab extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
          <FlatList style={{margin:5}}
          data={DATA}
          numColumns={2}
          keyExtractor={(item, index) => item.id }
          renderItem={({item}) =>
          <View style={Styles.container}> 
              <Card containerStyle={{borderRadius:10}}>
                  <Card.Image 
                      source={item.image}
                  />                 
                  <Card.Title>{item.title}</Card.Title>
                  <Button
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Details' /> 
                    <Card.Divider />
                  <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Add To Cart' /> 
              </Card>
          </View>
          }
      />   
        )
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
    },
    items:{
        width:'auto',
        height:'auto',
        resizeMode:'cover',
    },
    whitebg:{
        backgroundColor:'white'
    }

})