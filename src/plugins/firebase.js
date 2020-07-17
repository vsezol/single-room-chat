import firebase from 'firebase/app'
import 'firebase/database'

const {
  VUE_APP_FB_API_KEY,
  VUE_APP_FB_AUTH_DOMAIN,
  VUE_APP_FB_DATABASE_URL,
  VUE_APP_FB_PROJECT_ID,
  VUE_APP_FB_STORAGE_BUCKET,
  VUE_APP_FB_MESSAGE_SENDER_ID,
  VUE_APP_FB_APP_ID,
  VUE_APP_FB_MEASUREMENT_ID
} = process.env

const firebaseConfig = {
  apiKey: VUE_APP_FB_API_KEY,
  authDomain: VUE_APP_FB_AUTH_DOMAIN,
  databaseURL: VUE_APP_FB_DATABASE_URL,
  projectId: VUE_APP_FB_PROJECT_ID,
  storageBucket: VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_FB_MESSAGE_SENDER_ID,
  appId: VUE_APP_FB_APP_ID,
  measurementId: VUE_APP_FB_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)
const db = firebase.database()
export default db