import { initializeApp, FirebaseApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore'

const app: FirebaseApp = initializeApp({});
const auth: Auth = getAuth(app);
const store: Firestore = getFirestore(app);

export { app, auth, store };
