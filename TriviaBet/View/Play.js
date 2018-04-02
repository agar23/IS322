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

type Props = {};
export class Play extends Component<Props> {
  static navigationOptions = {
          title: 'Play',
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
            Play
          </Text>
      		
      </View>
    );
  }
}
export class PlayFriends extends Component<Props> {
  static navigationOptions = {
          title: 'PlayFriend',
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
            PlayFriend
          </Text>
          
      </View>
    );
  }
}

export default PlayScreen = StackNavigator({
    Play: { 
      screen: Play
    },
    PlayFriends: {
      screen: PlayFriends
    }
  },
  { headerMode: 'none' }
);
