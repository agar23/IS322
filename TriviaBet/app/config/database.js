import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDk_9NF56VE_LBOXCurthnuhs4cZ1Jpx7A",
  authDomain: "triviabet-194903.firebaseapp.com",
  databaseURL: "https://triviabet-194903.firebaseio.com",
  projectId: "triviabet-194903",
  storageBucket: "triviabet-194903.appspot.com",
  messagingSenderId: "283423432126"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
