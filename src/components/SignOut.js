import React from 'react'
import { auth } from '../firebase.js'


function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'space-around', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
           <h2 style={{fontFamily:'cursive',color:'gray'}}>chat with us</h2> 
            <button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut
