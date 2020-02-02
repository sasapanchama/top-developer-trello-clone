import firebase from 'firebase';
import config from './config';

export const firebaseApp = firebase.initializeApp(config);
export const firebaseData = firebaseApp.database();
export const firebaseObject = firebase.database;