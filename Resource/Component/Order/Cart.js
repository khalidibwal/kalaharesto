import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet,ScrollView, Image } from 'react-native';
import { CartContext } from './CartContext';
import {Card} from 'react-native-elements'
import QRCode from 'react-native-qrcode-svg';
import { db } from '../../../config/ChatConfig';
import firebase from 'firebase/app'
import 'firebase/auth'
export function Cart ({navigation}) {
const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
const [data, setData] = useState([])
const [user, setUser] = useState([])
const [dates, setDates] = useState([])
const isSignin = firebase.auth().currentUser.displayName
const timestamp = firebase.firestore.FieldValue.serverTimestamp()
useEffect(() => {
  setData(items)
  setUser(isSignin)
  setDates(timestamp)
}, []);

function currencyFormat(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function getBarcode(){
  const Dataprod = data.map((slot)=> {
    return slot.product.name + " Qty:" + slot.qty + " ," + " Price: " + slot.totalPrice})
  return Dataprod + " Total Price : IDR " + getTotalPrice();
}

function saveCart(){
  const Dataprod = data.map((slot)=> {
    return slot.product.name + " Qty:" + slot.qty + " ," + " Price: " + slot.totalPrice})
  db.collection('ordermenu').add({datetime:dates, username:user, foodmenu:Dataprod, totalprice:getTotalPrice()})
  navigation.navigate('Scan',{
    data:getBarcode()
  })
}

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    
    
    return (
      <Card containerStyle={styles.cardRound}>
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>IDR {currencyFormat(total)}</Text>
       </View>
       <Button title="Confirm" onPress={()=>saveCart()}/>
       </Card>
       
    );
  }

function renderItem({item}) {

    return (
    <ScrollView>
      {item.qty > 0 ?<Card containerStyle={styles.cardRound}>
       <View style={styles.cartLine}>
          <Image source={item.product.image} style={styles.imageMenu}/>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>IDR {currencyFormat(item.totalPrice)}</Text>
       </View>
       </Card>:<></>}     
       </ScrollView>
    );
  }

  return (
    <View>
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
    
    </View>
  );
}
const styles = StyleSheet.create({
  cardRound:{
    borderRadius:10
  },
  cartLine: { 
    flexDirection: 'row'
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 15, 
    lineHeight: 40, 
    color:'#333333',
    left:10 
  },
  lineRight: { 
    flex: 1,
    fontSize: 15, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  imageMenu:{
    width:50,
    height:50
  }
});