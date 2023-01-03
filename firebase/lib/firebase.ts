import { initializeApp, FirebaseApp } from 'firebase/app';
import { Auth, getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, Firestore, connectFirestoreEmulator } from 'firebase/firestore'

const config = {
    apiKey:             import.meta.env.VITE_apiKey,
    authDomain:         import.meta.env.VITE_authDomain,
    projectId:          import.meta.env.VITE_projectId,
    storageBucket:      import.meta.env.VITE_storageBucket,
    messagingSenderId:  import.meta.env.VITE_messagingSenderId,
    appId:              import.meta.env.VITE_appId,
    measurementId:      import.meta.env.VITE_measurementId
} // your config here

function initFireBase (): { app: FirebaseApp, auth: Auth, store: Firestore } {
    const app: FirebaseApp = initializeApp(config);
    const auth: Auth = getAuth(app);
    const store: Firestore = getFirestore(app);

    if (location.hostname === 'localhost') { // running locally
        connectAuthEmulator (auth, 'http://localhost:9099');
        connectFirestoreEmulator (store, 'localhost', 8080);
    }

    return { app, auth, store };
}

export const { auth, app, store }: { app: FirebaseApp, auth: Auth, store: Firestore } = initFireBase ();
