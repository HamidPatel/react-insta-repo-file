import {initializeApp} from "firebase/app"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext,useContext } from "react";
import { useState } from "react";
export const FirebaseContext = createContext(null);
export const useFirebase = () =>useContext(FirebaseContext)
const firebaseConfig = {
  apiKey: "AIzaSyCc2NOkfK7ap0gdf2yea6DXgw7nneHNeF0",
  authDomain: "my-instagram-database.firebaseapp.com",
  projectId: "my-instagram-database",
  storageBucket: "my-instagram-database.appspot.com",
  messagingSenderId: "359822178301",
  appId: "1:359822178301:web:2d6b4b504aae21398ecb94",
  databaseURL:"https://my-instagram-database-default-rtdb.firebaseio.com/",
};
export const app = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(app)
export const FirebaseProvider  = (props) => {
 
  const signUpUserWithEmailAndpassword = (email , password) => {
      createUserWithEmailAndPassword(firebaseAuth, email, password)
  }
  const isloggedIn = () => {}
  const [user, setUser] = useState(null)
  return<FirebaseContext.Provider value={{signUpUserWithEmailAndpassword, user,setUser, isloggedIn}}>{props.children}</FirebaseContext.Provider>
  
 }







// import firebase from "firebase/app";

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log("authenticated", user);
//   } else {
//     console.log("signed out");
//   }
// });