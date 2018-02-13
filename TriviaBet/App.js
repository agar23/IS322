import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

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
            <Text style = {styles.buttonText}> Google Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
    borderRadius:10,
    backgroundColor:'rgb(202,0,0)'
  },
  buttonText: {
    fontSize:16,
    fontWeight :'bold',
    color:'#FFFFFF'
  }
});
