import firebase from 'firebase/app';

import { FIREBASE_CONFIG } from './config';

// Initialize Firebase
try {
  firebase.app();
  // firebase.analytics();
} catch (error) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export default firebase;
