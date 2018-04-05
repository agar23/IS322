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

type Props = {};
export class Profile extends Component<Props> {
  static navigationOptions = {
          title: 'Profile',
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
            Profile
          </Text>

      </View>
    );
  }
}

export default ProfileScreen = StackNavigator({
    Profile: {
      screen: Profile
    },
  },
  { headerMode: 'none' }
);
