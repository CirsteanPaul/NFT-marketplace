import{ initializeApp } from 'firebase/app';
import {getFirestore } from '@firebase/firestore';
import {getStorage} from 'firebase/storage'

  const firebaseConfigDevelop = {
    apiKey: "AIzaSyAEQzEo_o1QAZECAcIySgrwyvoK1aaKerg",
    authDomain: "rockstarapes-77bbe.firebaseapp.com",
    projectId: "rockstarapes-77bbe",
    storageBucket: "rockstarapes-77bbe.appspot.com",
    messagingSenderId: "535252893945",
    appId: "1:535252893945:web:b20eaf0eb25b439b56e228"
  };
  
const app = initializeApp(firebaseConfigDevelop);
const db = getFirestore(app);
export const storage = getStorage(app);

export default db ;