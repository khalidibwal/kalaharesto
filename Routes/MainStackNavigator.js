import React from 'react';
import { TouchableOpacity } from 'react-native';
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

import { ProductList } from '../Resource/Component/Order/ProductList';
import { ProductDetails } from '../Resource/Component/Order/ProductDetails';
import { Cart } from '../Resource/Component/Order/Cart';
import { CartIcon } from '../Resource/Component/Order/CartIcon';
import { CartProvider } from '../Resource/Component/Order/CartContext';


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function Root(){
    return(
        <Drawer.Navigator
        screenOptions={{headerShown:true}} 
        drawerContent={(props) => <Menu {...props} /> }>
            <Drawer.Screen name='Home' component={Home} 
            options={{headerTitle: props=> <Titleheader />}} />
            <Drawer.Screen name='Food' component={FoodMenu} 
            options={{headerTitle: props=> <Titleheader />}}/>
            <Drawer.Screen name='Reservation' component={Reservation} />
            <Drawer.Screen name='Chating' component={Chating}/>
            <Drawer.Screen name='Location' component={Location}
             options={{headerTitle: props=> <Titleheader />}}/>
        </Drawer.Navigator>
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
                options={{headerShown:false}}  />
                <Stack.Screen name="Food" component={FoodMenu} />
                <Stack.Screen name="SignUp" component={SignUp}  />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Chating" component={Chating}/>
                <Stack.Screen name="gallery" component={Gallden}/>
                <Stack.Screen name="gallpier" component={Gallpier}/>
                <Stack.Screen name="gallwharf" component={Gallwharf}/>
                <Stack.Screen name="Den" component={Den}
                options={{headerTitle: props=> <Titleheader />}}/>
                <Stack.Screen name="Wharf" component={Wharf}
                options={{headerTitle: props=> <Titleheader />}}/>
                <Stack.Screen name="Pier" component={Pier}
                options={{headerTitle: props=> <Titleheader />}}/>
                <Stack.Screen name="Scan" component={Scanner}
                options={{headerTitle: props=> <Titleheader />}}/>
                {/* <Stack.Screen name="Coupon" component={Coupon}
                options={{headerTitle: props=> <Titleheader />}}/> */}

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