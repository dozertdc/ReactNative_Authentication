import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDeYtI_SFyJGUyFZbx0tUxE1CtqZ-fy9U4',
            authDomain: 'authentication-96c91.firebaseapp.com',
            databaseURL: 'https://authentication-96c91.firebaseio.com',
            projectId: 'authentication-96c91',
            storageBucket: 'authentication-96c91.appspot.com',
            messagingSenderId: '206747252510'
        });
    }

    render(){
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;