import{ initializeApp } from 'firebase/app';
import {getFirestore } from '@firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfigDevelop = {
    apiKey: 'AIzaSyAvHB1zMkMkpXzj5ZWMZvxrCNU92ajYBTE',
    authDomain: 'ftlife-develop.firebaseapp.com',
    projectId: 'nftlife-develop',
    storageBucket: 'nftlife-develop.appspot.com',
    messagingSenderId: '578901979743',
    appId: '1:578901979743:web:84409288d65051ae4da1ea',
  };
//   const firebaseConfigProduction = {
//     apiKey: "AIzaSyCx-vIQZ5VeidGr7Nr2ZGFB6TFmjYyp4fg",
//     authDomain: "kidzukitokens.firebaseapp.com",
//     projectId: "kidzukitokens",
//     storageBucket: "kidzukitokens.appspot.com",
//     messagingSenderId: "340127451788",
//     appId: "1:340127451788:web:08c751d2d827e73294c9a9",
//     measurementId: "G-Q27WRC2DNS"
//   };
  
const app = initializeApp(firebaseConfigDevelop);
const db = getFirestore(app);
export const storage = getStorage(app);

export default db ;