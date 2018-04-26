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
    backgroundColor: 'steelblue',
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
  profileFlex: {
    width: 360,
    height: 400,
    backgroundColor: 'white',
    top: 200
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
  }
});
