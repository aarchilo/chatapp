import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { auth } from '../firebase.js';
import "../index.css"
export default function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
        
    }
    return (
        <div>
            <button style={{ margin:'auto',display:'block',width:'40%',height:'100%',fontFamily:'cursive' ,marginTop:"20%",border:"1px solid gray"}} onClick={signInWithGoogle}className="symbol">
                signin with Google
                </button>
        </div>
    )
}


