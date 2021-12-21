import React, { Component } from 'react';
import {
  Easing,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Modal
} from 'react-native';
import QRCode from "react-native-qrcode-svg";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { SimpleLineIcons } from '@expo/vector-icons';
import { auth,db } from '../../config/ChatConfig';
import firebase from 'firebase/app'
import 'firebase/auth'
import { Card, Icon } from 'react-native-elements'
const { width, height } = Dimensions.get('window');

const ROWS = 6;
const COLS = 5;
const TIMING = 600;
const TEXT_HEIGHT = 20;
let seats = [];
let seatsAnimation = [];

for (var i = 0; i < ROWS + COLS - 1; i++) {
  seatsAnimation.push(i);
}

Array(ROWS * COLS).join(' ').split(' ').map((_, i) => {
  const currentIndex = i % COLS + Math.floor(i / COLS) % ROWS;
  const currentItem = {
    label: i + 1 < 10 ? '0' + (i + 1) : i + 1,
    s: currentIndex,
    key: i,
    animated: new Animated.Value(1)
  };

  seats.push(currentItem);
  console.log("label",currentItem)
});

export default class Reservation extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      selectedItems: [],
      username:'',
      visible:false,
      dates:''
    };

    this.selectionAnimation = new Animated.Value(0);

    this.animatedValue = [];
    seatsAnimation.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    });
  }

  componentDidMount(){
    const isSignin = firebase.auth().currentUser.displayName
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    this.setState({username:isSignin,dates:timestamp})
  }

  animate = () => {
    const animations = seatsAnimation.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: this.state.finished ? 0 : 1,
        duration: TIMING,
        useNativeDriver: true,
      });
    });
    Animated.sequence([
      Animated.stagger(TIMING * 0.15, animations)
    ]).start(() => {
      this.setState({
        finished: !this.state.finished,
        selectedItems: []
      });

      // this.selectionAnimation.setValue(0);
      Animated.timing(this.selectionAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.elastic(1.3)
      }).start();
    });
  };

  renderItem = ({ item }) => {
    const i = item.key;
    const scale = this.animatedValue[item.s].interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0, 1]
    });
    const { selectedItems } = this.state;
    const isSelected = selectedItems.includes(item.key);
    
    const itemPressScale = item.animated.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0, 1]
    });
    

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          const selected = isSelected
            ? selectedItems.filter(i => i !== item.key)
            : [...selectedItems, item.key];

          item.animated.setValue(0);
          this.setState(
            {
              selectedItems: selected
            },
            () => {
              Animated.parallel([
                Animated.timing(this.selectionAnimation, {
                  toValue: -TEXT_HEIGHT * selected.length,
                  duration: 500,
                  useNativeDriver: true,
                  easing: Easing.elastic(1.3)
                }),
                Animated.timing(item.animated, {
                  toValue: 1,
                  duration: 200,
                  useNativeDriver: true
                })
              ]).start();
            }
          );
        }}
        style={{
          opacity: 1 - parseInt(item.s) / 15
        }}>
        <Animated.View
          style={{
            transform: [
              {
                scale: item.animated
              }
            ]
          }}>
          <Animated.View
            style={[
              {
                backgroundColor: isSelected ? 'red' : '#3493FF'
              },
              styles.item,
              {
                transform: [
                  {
                    scale
                  }
                ]
              }
            ]}>
              <Animated.Text style={[styles.itemText]}>
              Table
            </Animated.Text>
            <Animated.Text style={[styles.itemText]}>
              {item.label}
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  };



 saveRowSeat = () =>{
  const {selectedItems, username, dates} = this.state
  var a = this.state.selectedItems
  var x = a.map(function(item){
    return item + 1
  })
  console.log("var x", x)
  
  if(x && x.length){
    db.collection('reservate').add({rowSeat:x, username:username, totalSeat:x.length, date:dates})
    this.setState({visible:true})
  }
  else{
    Alert.alert(
      'Warning',
      'Please Choose Your Seat First',
      [
        {
          text: 'Close',
          onPress: () => console.log('Failed')
        },
      ],
      {cancelable: false},
    );
  }
 }



  render() {
    var a = this.state.selectedItems
    var x = a.map(function(item){
      return item + 1
    })
    var qrdata = "Seat Row :" +" "+ x
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 100,
            width: width,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
          {/* <SimpleLineIcons
            name="menu"
            size={22}
            color="#666"
            style={{ paddingLeft: 12 }}
          /> */}
          <Text style={{ fontSize: 14, fontWeight: '700', color: '#333', paddingLeft:12 }}>
            Select Seats
          </Text>
          <SimpleLineIcons.Button
            name="refresh"
            size={22}
            color="#666"
            backgroundColor="transparent"
            onPress={this.animate}
          />
        </View>
        <Text>UPPER FLOORS</Text>
        <FlatList
          numColumns={COLS}
          extraData={this.state.selectedItems.slice(0,10)}
          data={seats.slice(0,10)}
          style={{ flex: 0.8 }}
          renderItem={this.renderItem}
        />
        <Text>INDOOR</Text>
        <FlatList
          numColumns={COLS}
          extraData={this.state.selectedItems.slice(10,20)}
          data={seats.slice(10,20)}
          style={{ flex: 0.8 }}
          renderItem={this.renderItem}
        />
        <Text>OUT DOOR</Text>
        <FlatList
          numColumns={COLS}
          extraData={this.state.selectedItems.slice(20,30)}
          data={seats.slice(20,30)}
          style={{ flex: 0.8 }}
          renderItem={this.renderItem}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flex: 0.2
          }}>
          <View
            style={{
              height: TEXT_HEIGHT,
              overflow: 'hidden',
              backgroundColor: 'transparent'
            }}>
            <Animated.View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                transform: [
                  {
                    translateY: this.selectionAnimation
                  }
                ]
              }}>
              {Array(ROWS * COLS + 1).join(' ').split(' ').map((_, i) => {
                return (
                  <View
                    key={i}
                    style={{
                      height: TEXT_HEIGHT,
                      width: TEXT_HEIGHT * 1.4,
                      marginRight: 4,
                      alignItems: 'flex-end',
                      justifyContent: 'center'
                    }}>
                    <Text style={[styles.text]}>
                      {i}
                    </Text>
                  </View>
                );
              })}
            </Animated.View>
          </View>
          <Text style={styles.text}>
            Table Selected 
          </Text>
          <View style={styles.container}>
          <Button title='Confirm' onPress={()=> this.saveRowSeat()}></Button>
          </View>
        </View>
        
        <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {this.state.visible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  

              <View style = {styles.modal}>
              <QRCode value={qrdata}
              size={220}/>  
              <Text style = {styles.text}> Name : {this.state.username}</Text>  
              <Text style = {styles.text}> Seat row : {x + ','}</Text>  
              {/* <Text style = {styles.text}> Date Reservation : {new Date(this.state.dates.toDate()).toDateString()}</Text>   */}
              <Button title="Close" style={styles.tops} onPress = {() => {  
                  this.setState({ visible:!this.state.visible})}}/>  
          </View>  
        </Modal>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  item: {
    width: width / COLS,
    height: width / COLS,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemText: {
    color: 'white',
    fontWeight: '700'
  },
  text: { fontSize: 15, fontWeight: '500' },
  spaceBetween:{
    marginTop:10
  },
  modal: {  
    justifyContent: 'center',  
    alignItems: 'center',   
    backgroundColor : "#e5e5e5",   
    height: 400 ,  
    width: '80%',  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',    
    marginTop: 80,  
    marginLeft: 40,  
     
     },
    tops:{
      marginTop:15
    }  
});