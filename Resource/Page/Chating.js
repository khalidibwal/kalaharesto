import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth,db } from '../../config/ChatConfig';
import { GiftedChat } from 'react-native-gifted-chat';
import LogOutIcon from 'react-native-vector-icons/Entypo'

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/storage'



const Chating = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [modalVisible, SetmodalVisible] = useState(false)
    const signOut = () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            navigation.replace("Login");
        }).catch((error) => {
            // An error happened.
            console.log(error,"Error by sign out")
        });
    }


    useLayoutEffect(() => {
        const User = firebase.auth().currentUser
        navigation.setOptions({
            headerLeft: () => (
                <View>
                    {User ? <Text>{User.displayName}</Text>: <Text>Guest</Text>}
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity style={{
                    marginRight: 10
                }}
                    onPress={signOut}
                >
                    
                    <LogOutIcon 
                    name='log-out'
                    size={30}/>
                </TouchableOpacity>
            )
        })
    }, [navigation]);

    const [user, setUser] = useState(() => firebase.auth().currentUser || null);
    useEffect(() => firebase.auth().onAuthStateChanged(setUser), []);
    useEffect(() => {
        if (user === null) {
          // user is signed out
          navigation.navigate('Login');
        }
        else{
    const unsubscribe = db.collection('chats')
      .where('user.name', '==', user.displayName)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
      }))
      ))
        }
      }, [user]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'How Can We Help You ?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const { _id, createdAt, text, user,} = messages[0]
        db.collection('chats').add({ _id, createdAt,  text, user })
    }, []);
    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            scrollToBottom={true}
            isTyping={true}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }}
        />
    );
}
const styles = StyleSheet.create({
});
export default Chating; 