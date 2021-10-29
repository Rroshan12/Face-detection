import React from 'react'

function Navigation({onRouteChange}) {
    return (
        <div style={{display:'flex', justifyContent:'flex-end'}}>
            <p className='f3 link dim black underline pa3 ' onClick={() => onRouteChange('sign_in')} > Sign Out</p>
            
        </div>
    )
}

export default Navigation
