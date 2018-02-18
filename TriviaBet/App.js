import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

const title = "TriviaBet \nTrivia with Stakes";
const title2 = "Trivia";
const title3 = "Bet\n";
const title4 = "Trivia with ";
const title5 = "Stakes";


export default class App extends Component<Props> {

    _callGoogle(){
      GoogleSignin.configure({})
        .then(() => {
          GoogleSignin.signIn()
            .then((user) => {
              alert('Hey '+user.givenName+' you are succesfully logged in!')
            })
            .catch((err) => {
            console.log('WRONG SIGNIN', err);
            })
            .done();
      });

    }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress = {this._callGoogle.bind(this)}>
          <View style = {styles.button}>
            <Text style = {styles.buttonText}> </Text>
            </View>
        </TouchableOpacity>

        <GoogleSigninButton
         style={{width: 180, height: 54, position: 'absolute', bottom:40, left:15}}
         size={GoogleSigninButton.Size.Standar}
         color={GoogleSigninButton.Color.Light}
         onPress={this._callGoogle.bind(this)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  index: {
  	fontFamily: 'copperplate',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    margin: 10,
    top: -200,
  },

});
