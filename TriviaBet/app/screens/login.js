import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { StackNavigator, } from 'react-navigation';
import PropTypes from 'prop-types';
import Home from './Home.js';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
import firebaseApp from '../config/database';
import * as Keychain from 'react-native-keychain';

const title = "TriviaBet \nTrivia with Stakes";
const title2 = "Trivia";
const title3 = "Bet\n";
const title4 = "Trivia with ";
const title5 = "Stakes";

const firebaseRegister = (email, first, last, uName, picture) => {
  firebaseApp.auth().createUserAndRetrieveDataWithEmailAndPassword(email, email)
    .catch(function(error) {
        var errorCode = error.code;
        if (errorCode == 'auth/email-already-in-use') {
            console.log('Email address alredy in use.');
        }
    }).then(response => {
      if (response === undefined){
        console.log('Email address alredy in use.');
      } else {
        firebaseApp.database().ref('users').child(response.user.uid).set({
                    firstName: first,
                    lastName: last,
                    username: uName,
                    email: email,
                    picture: picture
                })
      firebaseApp.database().ref('stats').child(response.user.uid).set({
                  wins: 0,
                  played: 0,
                  credits: 500,
              })
      }
    });
};

const getFireUID = (email) => {
  var query = firebaseApp.database().ref("users").orderByChild('email').equalTo(email);
  var key;
  query.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      setLocalUID(key);
      });
    });
}

const setLocalUID = (uid) => {
  Keychain.setGenericPassword("JWT", uid)
     .then(function() {
       console.log('UID saved successfully!');
     });
}

const getLocalUID = () => {
  Keychain.getGenericPassword()
    .then(function(credentials) {
      console.log('Credentials successfully loaded for user:' + credentials.password);
    }).catch(function(error) {
      console.log('Keychain couldn\'t be accessed! Maybe no value set?', error);
    });
}

export class login extends Component<Props> {

    _callGoogle(){
      GoogleSignin.configure({})
        .then(() => {
          GoogleSignin.signIn()
            .then((user) => {
              console.log(user)
              firebaseRegister(user.email, user.givenName, user.familyName, user.name, user.photo);
              getFireUID(user.email);
              this.props.navigation.navigate('Home')
            })
            .catch((err) => {
            console.log('WRONG SIGNIN', err);
            })
            .done();
        });
    }

    render() {
     const { navigate } = this.props.navigation;
     const user = GoogleSignin.currentUser();
     var _this = this;
     return (
      <View style={styles.container}>

      <GoogleSigninButton
         style={{width: 165, height: 54, position: 'absolute', bottom:40, left:15}}
         size={GoogleSigninButton.Size.Standar}
         color={GoogleSigninButton.Color.Light}
         onPress={this._callGoogle.bind(this)}
         />

      <View style={styles.FBbutton1}>
        <FBLogin
        style={styles.FBbutton}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
           console.log(data);
           _this.setState({ user : data.credentials });
           firebaseRegister(data.profile.email, data.profile.first_name, data.profile.last_name, data.profile.name, data.profile.picture.data.url);
           getFireUID(data.profile.email);
           navigate('Home')
          }}
          onLogout={function(){
            alert('You are now logged off!');
            _this.setState({ user : null });
          }}
          onLoginFound={function(data){
            console.log("Existing login found.");
            console.log(data);
            _this.setState({ user : data.credentials });
            navigate('Home')
          }}
          onLoginNotFound={function(){
            console.log("No user logged in via facebook.");
            _this.setState({ user : null });
          }}
          onError={function(data){
            console.log("ERROR");
            console.log(data);
          }}
          onCancel={function(){
            console.log("User cancelled.");
          }}
          onPermissionsMissing={function(data){
            console.log("Check permissions!");
            console.log(data);
          }}
          />
      </View>

      <Image
          style={styles.logo}
          source={require('../picture/logo.png')}
        />

      <Text style={styles.index}>
        {title2}
        <Text style={{color: '#f77f07'}}>{title3}</Text>
        {title4}
        <Text style={{color: '#f77f07'}}>{title5}</Text>
      </Text>

      </View>
    );
    }
   }

export default LoginScreen = StackNavigator({
       login: {
         screen: login
       },
       Home: {
         screen: Home
       },
     },
     { headerMode: 'none' }
   );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  logo: {
    width: 270,
    height: 270,
    position: 'absolute'
  },
  index: {
  	fontFamily: 'copperplate',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    margin: 10,
    top: -200,
  },
  FBbutton: {
    flex: 1,
    backgroundColor: '#3B5998',
    padding: 14,
    alignItems: 'center'
  },
  FBbutton1: {
    position: 'absolute',
    bottom:43,
    left:185
  },
});
