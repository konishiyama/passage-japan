// const app = import("firebase/app")
// const auth = import("firebase/auth")
// const database = import("firebase/firestore")
// const functions = import("firebase/functions")
// const storage = import("firebase/storage")
import { initializeApp } from "firebase/app"
import firebaseConfig from "./config"
const app = initializeApp(firebaseConfig)
// const app = import("firebase/compat/app")
// const auth = import("firebase/compat/auth")
// const database = import("firebase/compat/firestore")
// const functions = import("firebase/compat/functions")
// const storage = import("firebase/compat/storage")

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const loadFirebaseDependencies = Promise.all([
  app,
  // auth,
  // database,
  // functions,
  // storage,
]).then(values => {
  return values[0]
})

export default loadFirebaseDependencies
