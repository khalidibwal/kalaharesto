import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Product } from '../../Component/Order/Product';
import { getProducts } from '../../Services/ProductService';
import { ProductDetail } from '../Order/ProductDetails';
export function HomeTab ({navigation}) {
function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetail', {
          productId: product.id,
        });
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts().slice(0,17));
  },[]);

  return (
    <FlatList
      horizontal
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}
const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
    justifyContent:'space-between'
  },
});