import React from 'react';
import {View, StyleSheet} from 'react-native';
import QRCode from "react-native-qrcode-svg";



export default function Scanner({route, navigation}) {
    const {data} = route.params;
  
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <QRCode value={data}
        logo={require('../../../assets/icon/fnb.jpg')}
        logoBorderRadius={10}
        size={200}/>
        
      </View>
    );
  }
