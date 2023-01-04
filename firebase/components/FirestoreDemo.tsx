import { useEffect, useState } from "react";
import { store } from '../lib/firebase'
import { collection, onSnapshot, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

import type { CollectionReference, DocumentData, DocumentReference, DocumentSnapshot } from 'firebase/firestore';

// delete doc
// setDoc (doc, {data})
// updateDoc (doc, {data})

const colRef: CollectionReference = collection (store, 'me'); // store + collection name
const docRef: DocumentReference = doc (colRef, '1IScaSml2sgRaItdV3yH');

// firebase store demo
export default function FirestoreDemo (): JSX.Element {
    
    const [data, setData] = useState <Array<DocumentData>> ([]);

    useEffect (()=>{

        // getting full collection
        onSnapshot (colRef, spanshot =>{
            const data = spanshot.docs.map (doc=>doc.data());
            // console.log (data);
            setData (data);
        })

        // getting single document
        onSnapshot (docRef, (snapshot: DocumentSnapshot)=>{
            console.log (snapshot.data ());
        })

    }, [])
    
    return (
        <>
            {data && Object.values(data).map ((data,idx)=> {
                return <h1 key={idx}>{data.todos}</h1>
            })}
        </>
    )
}