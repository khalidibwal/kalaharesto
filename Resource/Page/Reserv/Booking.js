import React, {useState} from 'react';
import {View, Button, Platform, Text, StyleSheet, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Card } from 'react-native-elements';

export const Booking = ({navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const sendToResDEN = () => {
    navigation.navigate('Reservation',
    {date:date.toString(), outlet:'The DEN Of Kalaha'})
  }
  const sendToResPIER = () => {
    navigation.navigate('Reservation',
    {date:date.toString(), outlet:'The Pier By Kalaha'})
  }

  return (
    <ScrollView>
      <Card containerStyle={Styles.cardstyle}>
                    <Card.Title style={Styles.cardTitleStly}>The DEN Of Kalaha</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/slider/gall-den6.jpg')}></Card.Image>
                    <Card.Divider/>
                    <Button
                    
                    buttonStyle={Styles.btnlocation}
                    title='CHOOSE DATE'
                    onPress={showDatepicker} />
                    <Card.Divider/>
                    <Button
                    
                    buttonStyle={Styles.btngallery}
                    title='CHOOSE TIME RESERVATION'
                    onPress={showTimepicker}  />
                    <Card.Divider/>
                    <Button onPress={sendToResDEN} title="BOOK" />
                </Card>
                <Card containerStyle={Styles.cardstyle}>
                    <Card.Title style={Styles.cardTitleStly}>The Pier By Kalaha</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/slider/gall-pier.jpg')}></Card.Image>
                    <Card.Divider/>
                    <Button
                    
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='CHOOSE DATE'
                    onPress={showDatepicker} />
                    <Card.Divider/>
                    <Button
                    
                    buttonStyle={Styles.btngallery}
                    title='CHOOSE TIME RESERVATION'
                    onPress={showTimepicker} />
                    <Card.Divider/>
                    <Button onPress={sendToResPIER} title="BOOK" />
                </Card>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate = {new Date()}
        />
      )}
      <Text>{date.toString()}</Text>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection: "row",
    alignSelf:'center',
    marginRight:10,
    marginLeft:10
},
cardStyle:{
    borderRadius:20,
    width:70,
    height:80
},
iconStyle:{
    alignSelf:'center'
},
  sliderStyle:{
    width:'auto',
    height:100,
    marginTop:10,
    borderRadius:20
  },
  iconChat:{
      width:50,
      height:50
  },
  textfont:{
      fontSize:10,
      textAlign:'center'
  }
})