import React, {useEffect} from 'react';
import { TouchableOpacity, Image,StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import Home from '../Resource/Home';
import Titleheader from '../Resource/Component/Titleheader';
import HeaderMenu from '../Resource/Component/Drawer/HeaderMenu';
import SignUp from '../Resource/Component/Auth/SignUp';
import Login from '../Resource/Component/Auth/Login';
import FoodMenu from '../Resource/Page/FoodMenu';
import Menu from '../Resource/Component/Drawer/Menu';
// import AddCart from '../Resource/Page/AddCart';
import Reservation from '../Resource/Page/Reservation';
import Chating from '../Resource/Page/Chating';
import Location from '../Resource/Page/Location';
import Den from '../Resource/Component/Loc/Den';
import Pier from '../Resource/Component/Loc/Pier';
import Wharf from '../Resource/Component/Loc/Wharf';
import Gallden from '../Resource/Component/Loc/Gallden';
import Gallpier from '../Resource/Component/Loc/Gallpier';
import Gallwharf from '../Resource/Component/Loc/Gallwharf';
import Scanner from '../Resource/Component/Barcode/Scanner';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Coupon from '../Resource/Page/Coupon';
import {Booking} from '../Resource/Page/Reserv/Booking';
import RightHeader from '../Resource/Component/RightHeader';
import { ProductList } from '../Resource/Component/Order/ProductList';
import { ProductDetails } from '../Resource/Component/Order/ProductDetails';
import { Cart } from '../Resource/Component/Order/Cart';
import { CartIcon } from '../Resource/Component/Order/CartIcon';
import { CartProvider } from '../Resource/Component/Order/CartContext';
// import Booking from '../Resource/Page/Reserv/Booking';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator();


function Root(){
    return(
        <Tab.Navigator
        screenOptions={{headerShown:true}} 
        drawerContent={(props) => <Menu {...props} navigate={props.navigation} /> }>
            <Tab.Screen name='Home' component={Home} 
            options={{headerTitle: props=> <Titleheader />,headerBackground: () => (
              <Image
                style={{width:'auto',height:90}}
                source={require('../assets/bg/bgheader.jpeg')}
              />
            ),
            headerRight: ()=><RightHeader />,
            tabBarIcon:()=>(
              <Image source={require('../assets/icon/restaurant.png')}
              style={{width:40,height:40}}/>
            )}} />
            <Tab.Screen name='Food' component={FoodMenu} 
            options={{headerTitle: props=> <Titleheader />, title:'F&B',
            tabBarIcon:()=>(
              <Image source={require('../assets/icon/menu.png')}
              style={{width:40,height:40}}/>
            )
            }}/>
            <Tab.Screen name='Booking' component={Booking} 
            options={{tabBarIcon:()=>(
              <Image source={require('../assets/icon/reserve.png')}
              style={{width:40,height:40}}/>
            ), title:'Reservation'}}/>
            <Tab.Screen name='Chating' component={Chating} 
            options={{title:'Contact Us',
            tabBarIcon:()=>(
              <Image source={require('../assets/icon/contact.png')}
              style={{width:40,height:40}}/>
            )}}/>
            <Tab.Screen name='Location' component={Location}
             options={{headerTitle: props=> <Titleheader />,
              tabBarIcon:()=>(
                <Image source={require('../assets/icon/location.png')}
                style={{width:40,height:40}}/>
              )}}/>
        </Tab.Navigator>
    )
}

const MainStackNavigator = () =>{
    return(
      <CartProvider>
        <NavigationContainer>
              <Stack.Navigator
              screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
              }}>
                <Stack.Screen name="Home" component={Root} 
                options={{headerShown:false,headerStyle: {
                  backgroundColor: '#833471',
                },}}  />
                <Stack.Screen name="Food" component={FoodMenu}  />
                <Stack.Screen name="SignUp" component={SignUp}  />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Chating" component={Chating}
                options={{headerTitle: props=> <Titleheader />}}/>
                <Stack.Screen name="gallery" component={Gallden}/>
                <Stack.Screen name="gallpier" component={Gallpier}/>
                <Stack.Screen name="gallwharf" component={Gallwharf}/>
                <Stack.Screen name="Den" component={Den}
                options={{headerTitle: props=> <Titleheader />}}/>
                <Stack.Screen name="Reservation" component={Reservation}
                options={{headerTitle: props=> <Titleheader />}}/>
                <Stack.Screen name="Wharf" component={Wharf}
                options={{headerTitle: props=> <Titleheader />}}/>
                <Stack.Screen name="Pier" component={Pier}
                options={{headerTitle: props=> <Titleheader />}}/>
                <Stack.Screen name="Scan" component={Scanner}
                options={{headerTitle: props=> <Titleheader />}}/>
                <Stack.Screen name="Booking" component={Booking}
                options={{headerTitle: props=> <Titleheader />}}/>
              <Stack.Screen name='Products' component={ProductList} 
                options={({ navigation }) => ({
                  title: 'Products',
                  
                  headerRight: () => <CartIcon navigation={navigation}/>
                })}/>
                <Stack.Screen name='ProductDetail' component={ProductDetails} 
                options={({ navigation }) => ({
                  title: 'Product details',
                  
                  headerRight: () => <CartIcon navigation={navigation}/>,
                })} />
                <Stack.Screen name='Cart' component={Cart} 
                options={({ navigation }) => ({
                  title: 'My cart',
                  
                  headerRight: () => <CartIcon navigation={navigation}/>,
                })} />
                  </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    )
}

export default MainStackNavigator;