import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import { StackNavigator, } from 'react-navigation';
import PropTypes from 'prop-types';
import Login from './screens/login.js';
import SplashScreen from 'react-native-splash-screen';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
    SplashScreen.hide()
  }
  render() {
    return (
        <Login />
    );
  }
}
