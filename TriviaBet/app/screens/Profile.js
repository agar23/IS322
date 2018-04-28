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
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';



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
        call6: (async () => await this.getName())(),
        call7: this._getCredentials_Photo(),
        token: '',
        FuserId: '',
        data: 'help',
        uid: '',
        email: '',
        credits: 0,
        won: 0,
        played: 0,
        name: '',
        user: '',
        photo: {
          url: '',
          height: '',
          width: ','
        },
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

async getName(){
  var userId = await this.getLocalUID();
  const usernameV = await firebaseApp.database().ref('/users/'+userId+'/username').once('value').then(function(snapshot) {
    return snapshot.val();
  });
  this.setState({ name: usernameV });
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

_getCredentials_Photo(){
  var _this = this;
  var user = GoogleSignin.currentUser();
  console.log(user);
  FBLoginManager.getCredentials(function(error, data){
    if (data.credentials != undefined) {
      _this.setState({ token : data.credentials.token,
                       FuserId: data.credentials.userId });


       var api = `https://graph.facebook.com/v2.3/${data.credentials.userId}/picture?width=500&redirect=false&access_token=${data.credentials.token}`;
       fetch(api)
         .then((response) => response.json())
         .then((responseData) => {
           _this.setState({
                           photo : {
                             url : responseData.data.url,
                             height: responseData.data.height,
                             width: responseData.data.width,
                           },
                        });
                      })
                .done();
    } if (user){
        if (user.photo != null){
            _this.setState({
              photo : {
                url : user.photo
              },
           });
        } else {
          _this.setState({
            photo : {
              url : 'https://quilllegal.com.au/wp-content/uploads/2016/09/empty-profile.jpg'
            },
         });
        }
    } else {
      _this.setState({ token : null,
                       FuserId: null});
    }
  });
};

  render() {
    const { navigate } = this.props.navigation;
    return (

     <View style={styles.profile}>
        <View style={styles.profileUp}
            test={console.log(this.state.photo.url)}>

            <Image
              style={styles.profilePicture}
              source={{uri: this.state.photo.url}}
            />
        <View style={styles.profileUpDown}>
            <Text style={styles.profileName}>
             {this.state.name}
            </Text>
          </View>
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
