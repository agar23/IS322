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
import firebaseApp from '../config/database';
import * as Keychain from 'react-native-keychain';

type Props = {};
export class Play extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      call: (async () => await this.getLocalUID())(),
      call3: (async () => await this.getCredits())(),
      quizFinish : false,
      score: 0,
      wager: props.navigation.state.params.text,
      uid: '',
      credits: 0,
    }
  }

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

  async getCredits(){
    var userId = await this.getLocalUID();
    const creditsV = await firebaseApp.database().ref('/stats/'+userId+'/credits').once('value').then(function(snapshot) {
      return snapshot.val();
    });
    this.setState({ credits: creditsV });
  }

  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  _quizFinish(score){
    this.setState({ quizFinish: true, score : score })
  }
  _scoreMessage(score){
    var wagerback = this.state.wager*score*0.001
    var final = this.state.credits+wagerback
    firebaseApp.database().ref('stats').child(this.state.uid).set({
                credits: final,
                played: 0,
                wins: 0,
            })
    if(score <= 30){
      return (<View style={styles.innerContainer} >
                <View style={{ flexDirection: "row"}} >
                  <Icon name="trophy" size={30} color="white" />
                </View>
                <Text style={styles.score}>You need to work hard</Text>
                <Text style={styles.score}>You scored {score}%</Text>
                <Text style={styles.score}>you made {wagerback} credits</Text>
              </View>)
    }else if(score > 30 && score < 60){
      return (<View style={styles.innerContainer} >
                  <View style={{ flexDirection: "row"}} >
                    <Icon name="trophy" size={30} color="white" />
                    <Icon name="trophy" size={30} color="white" />
                  </View>
                  <Text style={styles.score}>You are good</Text>
                  <Text style={styles.score}>Congrats you scored {score}% </Text>
                  <Text style={styles.score}>you made {wagerback} credits</Text>
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
                  <Text style={styles.score}>you made {wagerback} credits</Text>
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

       </View> :  <Quiz quizFinish={(score) => this._quizFinish(score)} category={this.props.navigation.state.params.user} /> }

      </View>
    );
  }
}
const scoreCircleSize = 300


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
  
  },
  { headerMode: 'none' }
);
