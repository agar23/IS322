/**
 * TriviaBet
 * By Alfonso Austin, Thanh Tran, and Nicolas Laing
 * IS 332 Mobile Application Design
 */

import React, { Component } from 'react';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const title = "TriviaBet \nTrivia with Stakes";
const title2 = "Trivia";
const title3 = "Bet\n";
const title4 = "Trivia with ";
const title5 = "Stakes";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: 'row'}}>
          <Image  style={styles.logo} source={require('./images/logo.png')} />
        </View>

        <Text style={styles.index}>
          {title2}
          <Text style={{color: '#f77f07'}}>{title3}</Text>
          {title4}
          <Text style={{color: '#f77f07'}}>{title5}</Text>
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text2}>Play with Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Options</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Profile</Text>
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
    backgroundColor: 'steelblue',
  },
  index: {
    fontFamily: 'copperplate', 
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    margin: 10,
    top: -100,
  },
  logo: {
    alignItems: 'center',
    width: 100,
    height: 100,
    top: -100
  },
  text: {
    fontFamily: 'copperplate',
    fontSize: 30, 
    color: 'white'
  },
  text2: {
    fontFamily: 'copperplate',
    fontSize: 20, 
    color: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f77f07',
    padding: 15,
    margin: 3,
    width: 220,
    height: 60
  }
});
