import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBOQa4Li2ta3q3WnfppI9-1vc1oLolOoHQ",
  authDomain: "stock-m.firebaseapp.com",
  databaseURL: "https://stock-m.firebaseio.com",
  projectId: "stock-m",
  storageBucket: "stock-m.appspot.com",
  messagingSenderId: "339809887438"
};
export default firebase.initializeApp(config);