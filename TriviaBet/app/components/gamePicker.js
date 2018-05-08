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
import styles from '../screens/styles.js';

function updateState(text){
    this.setState({text})
}

type Props = {};
export class GamePicker extends Component<Props> {
  constructor(props) {
        super(props)
        this.state = {
            user: '',
        }
        updateState = updateState.bind(this)
    }

  updateUser = (user) => { this.setState({ user: user }) }

  onClick(event) {
      this.event.updateUser;
   }

  render() {
    return (
        <View style={styles.pickerOptions}>
            <Text style={styles.titleOptions}>Category</Text>
            <Picker selectedValue = {this.state.user} onValueChange={(e) => {this.props.updateUserCD(e); this.updateUser(e); }}>
               <Picker.Item label = "React" value = "react" />
               <Picker.Item label = "Sports" value = "sports" />
               <Picker.Item label = "Math" value = "math" />
            </Picker>
         </View>
    );
  }
}

export default GamePicker;
