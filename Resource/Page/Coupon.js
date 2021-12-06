import React from 'react'
import {View, Button} from 'react-native'
import WheelOfFortune from 'react-native-wheel-of-fortune'

const participants = [
    '%10',
    '%20',
    '%30',
    '%40',
    '%50',
    '%60',
    '%70',
    '%90',
    'FREE',
  ];
//   const wheelOptions = {
//         rewards: participants,
//         knobSize: 50,
//         borderWidth: 5,
//         borderColor: '#000',
//         innerRadius: 50,
//         duration: 4000,
//         backgroundColor: 'transparent',
//         textAngle: 'horizontal',
//         knobSource: require('./assets/images/knoob.png'),
//         getWinner: (value, index) => {
//           this.setState({winnerValue: value, winnerIndex: index});
//         },
//         onRef: ref => (this.child = ref),
//       };
export default class Coupon extends React.Component{
    constructor(){
        super()
        this.state={
            winnerValue:null,
            winnerIndex:null
        }
    }    
    render(){
        return(
            <View>
            <WheelOfFortune
            onRef={ref => (this.child = ref)} 
            rewards={ rewards }
            knobSize={20}
            borderWidth={3}
            borderColor={"#FFF"}
            // knoobSource={require('./assets/images/knoob.png')}
            winner={3}
            innerRadius={50}
            backgroundColor={"#c0392b"}
            getWinner={(value, index) => this.setState({ winnerValue: value, winnerIndex: index })}
        />
            <Button title="Press me" onPress={ () => { this.child._onPress() } } />
            </View>
        )
    }
}