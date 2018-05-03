/**
 * TriviaBet
 * By Alfonso Austin, Thanh Tran, and Nicolas Laing
 * IS 332 Mobile Application Design
 */
//***********************************************************************
import { StyleSheet } from 'react-native';
//***********************************************************************

export default styles = StyleSheet.create({
//***********************************************************************
// STANDARD STYLES
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  profile: {
    flex: 1,
  },
  index: {
    fontFamily: 'copperplate',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    margin: 10,
    top: -20,
  },
  logo: {
    alignItems: 'center',
    width: 100,
    height: 100,
    top: -20
  },
  text: {
    fontFamily: 'copperplate',
    fontSize: 30,
    color: 'white'
  },
  text2: {
    fontFamily: 'copperplate',
    fontSize: 20,
    color: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f77f07',
    padding: 15,
    margin: 3,
    width: 220,
    height: 60
  },
//***********************************************************************
// SPECIFIC STYLES
  profileHead: {

  },
  profileBody: {

  },
  profileUp: {
    flex: 1.4,
    backgroundColor: 'steelblue',
  },
  profileDown: {
    flex: 2,
    backgroundColor: 'white',
  },
  profilefoot: {
    flex: 0.3,
    backgroundColor: 'white',
    top: 55,
  },
  profilemid: {
    flex: 0.5,
    backgroundColor: 'white',
    top: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileUpDown: {
    flex: 0.3,
    backgroundColor: 'steelblue',
    marginTop: "auto",
    bottom: 15,
  },
  profileLeft: {
    backgroundColor: 'white',
    left: 10,
  },
  profileRight: {
    backgroundColor: 'white',
    right: 10,
  },
  profileEmail: {
    fontFamily: 'copperplate',
    textAlign: 'center',
    fontSize: 20,
    color: 'grey',
    top: 20
  },
  profileEmail2: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    top: 22
  },
  profileCredits: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
  },
  profileCredits2: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  profileWon: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
  },
  profileWon2: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  profilePlayed: {
    textAlign: 'right',
    fontSize: 22,
    color: 'black',
    textAlign: 'center'
  },
  profilePlayed2: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  profileName: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  profilePicture: {
    alignSelf: 'center',
    height: 125,
    width: 135,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 75,
    top: 30,
  }
});
