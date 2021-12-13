import React, {createContext, useState} from 'react';
import { getProduct } from '../../Services/ProductService';
export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);
  // const [kurang, setKurang] = useState([])

  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      console.log("Check item",item)
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
}

function decreaseItemToCart(id) {
  const product = getProduct(id);
  setItems((prevItems) => {
    const item = prevItems.find((item) => (item.id == id));
    console.log("Check item",item)
    if(!item) {
        return [...prevItems, {
            id,
            qty: 1,
            product,
            totalPrice: product.price 
        }];
    }
    else { 
        return prevItems.map((item) => {
          if(item.id == id && item.totalPrice > 0) {
            item.qty--;
            item.totalPrice -= product.price;
          }
          return item;
        });
    }
  });
}
function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice,decreaseItemToCart}}>
      {props.children}
    </CartContext.Provider>
  );
}