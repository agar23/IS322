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
import Play from './Play.js';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';
import GamePicker from '../components/gamePicker';
import Wager from '../components/wager';

type Props = {};
export class PrePlay extends Component<Props> {
  state = {
    user: '',
    text: ''
  }
   updateUser = (user) => { this.setState({ user: user }) }
   updateText = (text) => { this.setState({ text: text }) }

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
      <View style={styles.mainOptions}>
            <GamePicker updateUserCD={this.updateUser} />
            <Wager updateTextCD={this.updateText} />

            <View style={{flexDirection:"row", alignSelf: 'center', top: 100}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Play', { user: this.state.user, text: this.state.text })} >
              <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, backgroundColor:"steelblue"}}>
                <Icon name="md-arrow-round-forward" size={30} color="white" />
              </View>
            </TouchableOpacity >
            </View>

            <Text style={styles.text67}>{this.state.user}</Text>
            <Text style = {styles.text67}>{this.state.text}</Text>
         </View>
    );
  }
}

export default PrePlayScreen = StackNavigator({
    PrePlay: {
      screen: PrePlay
    },
    Play: {
      screen: Play
    },
  },
  { headerMode: 'none' }
);
