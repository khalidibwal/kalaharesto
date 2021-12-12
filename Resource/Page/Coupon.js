import React from 'react'
import {View, Button} from 'react-native'
import { Lottery, LotteryItem } from 'react-native-super-lottery';

export default class Coupon extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }    
    render(){
        return(
            <View>
            <Lottery
    ref={this.lotteryRef}
    data={lotteryData}
    renderItem={this.renderItem}
    defaultLucky={5}
/>
            </View>
        )
    }
}