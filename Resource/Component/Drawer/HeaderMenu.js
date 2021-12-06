import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import Menu from 'react-native-vector-icons/Entypo';

class HeaderMenu extends React.Component{
    constructor(props){
        super(props)
        console.log('our props',props)
        console.warn(props)
    }
    render(){
        const {navigation} = this.props
        return(
            <View>
                <TouchableOpacity>
                    <Menu name='menu' size={30}/>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    iconsize:{
        width:66,
        height:50,
        marginLeft:'auto',
        marginRight:'auto'
    },
    container:{
        flexDirection:'row'
    }
})

export default HeaderMenu;