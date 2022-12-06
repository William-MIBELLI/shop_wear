import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGAcGkEQBUclH-4-9xDT1Gncl4t16zfWM",
    authDomain: "shopwear-db.firebaseapp.com",
    projectId: "shopwear-db",
    storageBucket: "shopwear-db.appspot.com",
    messagingSenderId: "131915963197",
    appId: "1:131915963197:web:77a95c266d687e81ca4354"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig)
  const googleProvider = new GoogleAuthProvider().setCustomParameters({prompt: 'select_account'})
  const db = getFirestore()
  
  export const auth = getAuth(firebaseApp)
  export const signInWithGoogle = () => signInWithPopup(auth, googleProvider)

  export const createUserDocumentFromAuth = async(user, optionnalParams = {}) =>{

    const userRef = await doc(db, 'users', user.uid)
    const userSnapShot = await getDoc(userRef)

    if(!userSnapShot.exists()) {

        const {displayName, email } = user
        const createdAt = new Date()

        try{
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...optionnalParams})
            console.log('lutilisateur nexiste pas dans firestore, alors on le crée !')
        } catch (error){
            console.log('ERROR : ', error)
        }
    }
    return userRef
  }


  export const createUserWithEmail = async (auth, email, password) => {
    console.log('on rentre dans createuser dans firebase.js')
     if(!email || !password){
        return
     } 
    return createUserWithEmailAndPassword(auth, email, password)
  }


  export const signInWithMail = async (email, password) => {

    if(email === '' || password === ''){
        return
    }

    return signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = () => signOut(auth)

  export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
  }
  