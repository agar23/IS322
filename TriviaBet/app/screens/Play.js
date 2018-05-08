/**
 * TriviaBet
 * By Alfonso Austin, Thanh Tran, and Nicolas Laing
 * IS 332 Mobile Application Design
 */

import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Quiz  from '../components/quiz';

type Props = {};
export class Play extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      quizFinish : false,
      score: 0,
    }
    console.log(props.navigation);
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  _quizFinish(score){
    this.setState({ quizFinish: true, score : score })
  }
  _scoreMessage(score){
    if(score <= 30){
      return (<View style={styles.innerContainer} >
                <View style={{ flexDirection: "row"}} >
                  <Icon name="trophy" size={30} color="white" />
                </View>
                <Text style={styles.score}>You need to work hard</Text>
                <Text style={styles.score}>You scored {score}%</Text>
              </View>)
    }else if(score > 30 && score < 60){
      return (<View style={styles.innerContainer} >
                  <View style={{ flexDirection: "row"}} >
                    <Icon name="trophy" size={30} color="white" />
                    <Icon name="trophy" size={30} color="white" />
                  </View>
                  <Text style={styles.score}>You are good</Text>
                  <Text style={styles.score}>Congrats you scored {score}% </Text>
                </View>)
    }else if(score >= 60){
      return (<View style={styles.innerContainer}>
                 <View style={{ flexDirection: "row"}} >
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                  </View>
                  <Text style={styles.score}>You are the master</Text>
                  <Text style={styles.score}>Congrats you scored {score}% </Text>
                </View>)
    }
  }

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
      <View style={{flex:1}}>
      <StatusBar barStyle="light-content"/>

       { this.state.quizFinish ? <View style={styles.container}>
           <View style={styles.circle}>

             { this._scoreMessage(this.state.score) }
           </View>

       </View> :  <Quiz quizFinish={(score) => this._quizFinish(score)} category={this.props.navigation.state.params.user}  /> }

      </View>
    );
  }
}
const scoreCircleSize = 300
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

const styles = StyleSheet.create({
  score: {
    color: "white",
    fontSize: 20,
    fontStyle: 'italic'
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize/2,
    backgroundColor: "steelblue"

  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'
    },
    toolbarButton:{
        width: 55,
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1
    }
});

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
