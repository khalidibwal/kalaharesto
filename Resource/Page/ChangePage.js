import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

class ChangePage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      test:0
    }
  }
  updateTest = () =>{
    this.setState({test:this.state.test + 1})
  }
  render(){
    return(
      <View>
        <Text onPress={this.updateTest} >adding number {this.state.test}</Text>
      </View>
    )
  }
}

export default ChangePage;