import firebase from 'firebase';

import { FIREBASE_CONFIG } from '../firebase.config';

// Initialize Firebase
try {
  firebase.app();
  // firebase.analytics();
} catch (error) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export default firebase;
