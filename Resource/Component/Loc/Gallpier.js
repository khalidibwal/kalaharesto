
import React, {useState, useEffect} from 'react'
// import * as firebase from 'firebase';
// import firebase from "firebase/compat/app"
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/storage'

import {Card} from 'react-native-elements'
import { FlatList, Image, View, StyleSheet, ActivityIndicator} from 'react-native'

const Gallpier = () =>{
    const [sampleImage, setSampleImage] = useState([]);
    const [loading, setLoading] = useState(true) 

    const activeload = () =>{
        return(
            <ActivityIndicator size={'large'}/>
        )
    }
    const imageLoad = () => {
        setTimeout(() => {
            activeload()
          }, 5000);
        }

    const getSampleImage = async () => {
        const imageRefs = await firebase.storage().ref().child('pier/').listAll();
    const urls = await Promise.all(imageRefs.items.map((ref) => ref.getDownloadURL()));
    setSampleImage(urls);
    console.log('log now', sampleImage)
    }

 
    useEffect(() => {
        getSampleImage();
    },[]);

    return(
        <View style={{ justifyContent: 'center' }}>
            <FlatList data={sampleImage}
            renderItem={({item}) => <Card containerStyle={Styles.cardstyle}>
                                        <Card.Image source={{uri:item}}></Card.Image>
                                    </Card>}/>
        </View>
        )
    }

const Styles = StyleSheet.create({
    cardstyle:{
        borderRadius:10, 
        },
    imgstyle:{
        width:100,
        height:200
    }
})

export default Gallpier