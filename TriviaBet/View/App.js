/**
 * TriviaBet
 * By Alfonso Austin, Thanh Tran, and Nicolas Laing
 * IS 332 Mobile Application Design
 */

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';
import styles from './styles.js';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import HomeScreen from './Home.js';
//import PlayScreen from './Play.js';
//import PlayFriendScreen from './Play.js';
//import OptionsScreen from './Options.js';
//import ProfileScreen from './Profile.js';

/*
const RootStack = StackNavigator({
    Play: { 
      screen: PlayScreen
    },
    PlayFriends: { 
      screen: PlayFriendScreen
    },
    Options: { 
      screen: OptionsScreen
    },
    Profile: { 
      screen: ProfileScreen
    },
  },
);
*/

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

        <HomeScreen />

    );
  }
}
