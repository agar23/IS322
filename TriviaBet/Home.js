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
import Play from './Play.js';
import PlayFriends from './Play.js';
import Options from './Options.js';
import Profile from './Profile.js';

const titleFull = "TriviaBet \nTrivia with Stakes";
const title = {
  t1: "Trivia",
  t2: "Bet\n",
  t3: "Trivia with ",
  t4: "Stakes"
};

type Props = {};
export class Home extends Component<Props> {
  static navigationOptions = {
          title: 'Home',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'steelblue',
            borderBottomColor: 'steelblue',
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

        <View style={{flexDirection: 'row'}}>
          <Image  style={styles.logo} source={require('./images/logo.png')} />
        </View>

        <Text style={styles.index}>
          {title.t1}
          <Text style={{color: '#f77f07'}}>{title.t2}</Text>
          {title.t3}
          <Text style={{color: '#f77f07'}}>{title.t4}</Text>
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Play')}>
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('PlayFriends')}>
          <Text style={styles.text2}>Play with Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Options')}>
          <Text style={styles.text}>Options</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Profile')}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default HomeScreen = StackNavigator({
    Home: { 
      screen: Home
    },
    Play: {
      screen: Play
    },
    Options: {
      screen: Options
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: 'Home',
  }
);