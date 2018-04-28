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
        call: (async () => await this.getLocalUID())(),
        call2: (async () => await this.getEmail())(),
        call3: (async () => await this.getCredits())(),
        call4: (async () => await this.getWon())(),
        call5: (async () => await this.getPlayed())(),
        data: 'help',
        uid: '',
        email: '',
        credits: 0,
        won: 0,
        played: 0,
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

async getCredits(){
  var userId = await this.getLocalUID();
  const creditsV = await firebaseApp.database().ref('/stats/'+userId+'/credits').once('value').then(function(snapshot) {
    return snapshot.val();
  });
  this.setState({ credits: creditsV });
}

async getWon(){
  var userId = await this.getLocalUID();
  const wonV = await firebaseApp.database().ref('/stats/'+userId+'/wins').once('value').then(function(snapshot) {
    return snapshot.val();
  });
  this.setState({ won: wonV });
}

async getPlayed(){
  var userId = await this.getLocalUID();
  const playedV = await firebaseApp.database().ref('/stats/'+userId+'/played').once('value').then(function(snapshot) {
    return snapshot.val();
  });
  this.setState({ played: playedV });
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
        <View style={styles.profileUp}>
        </View>
        <View style={styles.profileDown}>
           <Text style={styles.profileEmail}>
             Email Address
           </Text>
           <Text style={styles.profileEmail2}>
            {this.state.email}
           </Text>
         <View style={styles.profilemid}>
         <View style={styles.profileLeft}>
            <Text style={styles.profileWon2}>
              {this.state.won}
            </Text>
            <Text style={styles.profileWon}>
             Games Won
            </Text>
          </View>
          <View style={styles.profileRight}>
            <Text style={styles.profilePlayed}>
              {this.state.played}
            </Text>
            <Text style={styles.profilePlayed2}>
             Games Played
            </Text>
          </View>
         </View>
         <View style={styles.profilefoot}>
             <Text style={styles.profileCredits2}>
               {this.state.credits}
             </Text>
             <Text style={styles.profileCredits}>
               Credits
            </Text>
         </View>
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
