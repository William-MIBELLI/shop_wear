import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QuerySnapshot,
  QueryDocumentSnapshot
} from "firebase/firestore";
import { Category } from "../store/category/category.types";
import { UserData } from "../store/user/user.types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGAcGkEQBUclH-4-9xDT1Gncl4t16zfWM",
  authDomain: "shopwear-db.firebaseapp.com",
  projectId: "shopwear-db",
  storageBucket: "shopwear-db.appspot.com",
  messagingSenderId: "131915963197",
  appId: "1:131915963197:web:77a95c266d687e81ca4354",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider().setCustomParameters({
  prompt: "select_account",
});
const db = getFirestore();

export const auth = getAuth(firebaseApp);
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export type ObjectToAdd = {
  title: string
}

export const createCollectionOrDocument = async <T extends ObjectToAdd>(collectionKey: string, objectToAdd: T[]) =>{
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
}

export const getCategoriesAndDocument = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const datas = await getDocs(q)
  
  const categoryMap = datas.docs.map(item => item.data() as Category)

  return categoryMap
}

export type OptionnalParams = {
  displayName?: string
}

export const createUserDocumentFromAuth = async (
  user: User,
  optionnalParams = {} as OptionnalParams
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  const userRef = doc(db, "users", user.uid);
  const userSnapShot = await getDoc(userRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...optionnalParams,
      });
      console.log(
        "lutilisateur nexiste pas dans firestore, alors on le crée !"
      );
    } catch (error) {
      console.log("ERROR : ", error);
    }
  }

  console.log('usersnapashot dans firebase : ', userSnapShot)
  return userSnapShot as QueryDocumentSnapshot<UserData>;
};

export const createUserWithEmail = async (email: string, password: string) => {

  if (!email || !password) {
    return;
  }
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithMail = async (email: string, password: string) => {
  if (email === "" || password === "") {
    return;
  }

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>)=> {
  onAuthStateChanged(auth, callback);
};

export const getCurrentuser = async (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  }) 
}