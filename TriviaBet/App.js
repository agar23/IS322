/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const title = "TriviaBet \nTrivia with Stakes";
const title2 = "Trivia";
const title3 = "Bet\n";
const title4 = "Trivia with ";
const title5 = "Stakes";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.index}>
          {title2}
          <Text style={{color: '#f77f07'}}>{title3}</Text>
          {title4}
          <Text style={{color: '#f77f07'}}>{title5}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  index: {
  	fontFamily: 'copperplate', 
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    margin: 10,
    top: -200,
  }
});
