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
import firebaseApp from '../config/database';
import * as Keychain from 'react-native-keychain';

const getData = () => {
  firebaseApp.database().ref('users').on('value', snap => snap.val())
}

type Props = {};
export class Profile extends Component<Props> {
      state = {
        call: (async () => console.log(await this.getLocalUID()))(),
        call2: (async () => await this.getEmail())(),
        data: 'help',
        uid: '',
        email: '',
    };


async getLocalUID(){
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      this.setState({ uid: credentials.password });
      return credentials.password;
    } else {
      this.setState({ uid: 'No credentials stored.' });
    }
  } catch (err) {
    this.setState({ uid: 'Could not load credentials. ' + err });
  }
}

async getEmail(){
  var userId = await this.getLocalUID();
  const emailV = await firebaseApp.database().ref('/users/'+userId+'/email').once('value').then(function(snapshot) {
    return snapshot.val();
  });
  this.setState({ email: emailV });
}
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
    	<View style={styles.profile}>
      <View style={styles.profileFlex}>
            <Text style={styles.profileEmail}>
              Email Address
            </Text>
            <Text style={styles.profileEmail2}>
            {this.state.email}
            </Text>
      </View>
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
