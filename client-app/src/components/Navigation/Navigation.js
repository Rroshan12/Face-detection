import React from 'react'

function Navigation({onRouteChange, isSignedIn}) {
    return (
       
        <div style={{display:'flex', justifyContent:'flex-end'}}>
            {
                isSignedIn ?   <p className='f3 link dim black underline pa3 ' onClick={() => onRouteChange('signin')} >Sign out </p> : ''
            }
           
            
        </div>
    )
}

export default Navigation
