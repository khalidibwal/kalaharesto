import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet,ScrollView, Image } from 'react-native';
import { CartContext } from './CartContext';
import {Card} from 'react-native-elements'
import QRCode from 'react-native-qrcode-svg';
export function Cart ({navigation}) {
const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

  const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <Card>
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>IDR {numberFormat(total)}</Text>
       </View>
       <Button title="Done" onPress={()=>navigation.navigate('Scan',{
      data:items
    })}/>
       </Card>
       
    );
  }

function renderItem({item}) {

    return (
    <ScrollView>
      <Card containerStyle={styles.cardRound}>
       <View style={styles.cartLine}>
          <Image source={item.product.image} style={styles.imageMenu}/>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>IDR {item.totalPrice}</Text>
       </View>
       </Card>     
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
    flexDirection: 'row',
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
    color:'#333333' 
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