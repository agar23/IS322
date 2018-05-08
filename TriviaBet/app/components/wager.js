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
export class Wager extends Component<Props> {
  constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
        updateState = updateState.bind(this)
    }

  updateText = (text) => { this.setState({ text: text }) }

  onClick(event) {
      this.event.updateUser;
   }

  render() {
    return (
        <View style={styles.wagerOptions}>
            <Text style={styles.titleOptions}>Wager</Text>
            <TextInput
                keyboardType = 'numeric'
                onChangeText={(e) => {this.props.updateTextCD(e); this.updateText(e); }}
                value={this.state.text}
              />
         </View>
    );
  }
}

export default Wager;
