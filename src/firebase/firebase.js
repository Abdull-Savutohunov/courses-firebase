import { initializeApp } from "firebase/app";
import {getAuth , signOut , updatePassword} from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqxlcw2Zh7jAWcZrj1d__A2_gXu3JkNgQ",
  authDomain: "courses-b1159.firebaseapp.com",
  databaseURL: "https://courses-b1159-default-rtdb.firebaseio.com",
  projectId: "courses-b1159",
  storageBucket: "courses-b1159.appspot.com",
  messagingSenderId: "654541499709",
  appId: "1:654541499709:web:05c8cddc2d9b64d7566954"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const storage  = getStorage(app)

export const updatePasswordPersod = (newPassword) => {
  updatePassword(auth.currentUser, newPassword).then(r => console.log(r))
}

export const handleSignOut = () => signOut(auth)  