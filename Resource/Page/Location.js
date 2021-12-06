import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import { Card ,Button, Icon} from 'react-native-elements'
import Titleheader from '../Component/Titleheader'

export default class Location extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ScrollView>
                <Card containerStyle={Styles.cardstyle}>
                    <Card.Title style={Styles.cardTitleStly}>The DEN Of Kalaha</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('../../assets/slider/gall-den6.jpg')}></Card.Image>
                    <Card.Divider/>
                    <Button
                    
                    buttonStyle={Styles.btnlocation}
                    title='VIEW LOCATION'
                    onPress={()=>this.props.navigation.navigate('Den')} />
                    <Card.Divider/>
                    <Button
                    
                    buttonStyle={Styles.btngallery}
                    title='GALLERY'
                    onPress={()=>this.props.navigation.navigate('gallery')} />
                </Card>
                <Card containerStyle={Styles.cardstyle}>
                    <Card.Title style={Styles.cardTitleStly}>The Pier By Kalaha</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('../../assets/slider/gall-pier.jpg')}></Card.Image>
                    <Card.Divider/>
                    <Button
                    
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW LOCATION'
                    onPress={()=>this.props.navigation.navigate('Pier')} />
                    <Card.Divider/>
                    <Button
                    
                    buttonStyle={Styles.btngallery}
                    title='GALLERY'
                    onPress={()=>this.props.navigation.navigate('gallpier')} />
                </Card>
                <Card containerStyle={Styles.cardstyle}>
                    <Card.Title style={Styles.cardTitleStly}>The Wharf At Kalaha</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('../../assets/slider/gall-wharf.jpg')}></Card.Image>
                    <Card.Divider/>
                    <Button            
                    buttonStyle={Styles.btnlocation}
                    title='VIEW LOCATION'
                    onPress={()=>this.props.navigation.navigate('Wharf')} />
                    <Card.Divider/>
                    <Button
                    
                    buttonStyle={Styles.btngallery}
                    title='GALLERY'
                    onPress={()=>this.props.navigation.navigate('gallwharf')} />
                </Card>
            </ScrollView>
        )
    }
}

const Styles = StyleSheet.create({
    btnlocation:{
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0
    },
    btngallery:{
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0,
        backgroundColor:'#f1c232'
    },
    cardstyle:{
        borderRadius:10, 
        backgroundColor:'#96705b'},
    cardTitleStly:{
        color:'white'
    }
})