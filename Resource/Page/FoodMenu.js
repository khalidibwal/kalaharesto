import React from 'react';
import { ScrollView,Text, StyleSheet, View, FlatList} from 'react-native';
import { Card, CardImage, CardTitle, CardContent, CardAction, CardButton } from 'react-native-material-cards'
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import {DrinkTab} from '../Component/Tab/DrinkTab';
import FoodTab from '../Component/Tab/FoodTab';
import { ProductList } from '../Component/Order/ProductList';


export default class FoodMenu extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
    <ScrollableTabView>
        <ProductList tabLabel="Food" navigation={this.props.navigation}/>
        <DrinkTab tabLabel="Beverages" navigation={this.props.navigation}/>
        <ProductList tabLabel="Other" navigation={this.props.navigation}/>
      </ScrollableTabView>
        )
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        borderRadius:150
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