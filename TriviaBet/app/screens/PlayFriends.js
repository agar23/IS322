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
  TouchableOpacity,
  Picker,
  TextInput
} from 'react-native';
import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';
import GamePicker from '../components/gamePicker';
import Wager from '../components/wager';

type Props = {};
export class PlayFriends extends Component<Props> {

  static navigationOptions = {
          title: 'Options',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'steelblue',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
      };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

          <Text style={styles.index}>
            Play With Friends
          </Text>

      </View>
    );
  }
}

export default PlayFriends = StackNavigator({
    PlayFriends: {
      screen: PlayFriends
    }
  },
  { headerMode: 'none' }
);
