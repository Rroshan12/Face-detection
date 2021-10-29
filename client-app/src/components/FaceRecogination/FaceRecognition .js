import React from 'react'
import './style.css'


function FaceRecognition ({imageUrl,box}) {
    return (
       <div className="center">

       
        <div className='  absolute  mt2'>
            <img id="inputimage" src={imageUrl} width="500px" height="auto"/>
            <div className="boundingBox" style={{top: box.topRow, bottom: box.bottomRow, right: box.rightCol, left: box.leftCol}} />
            
            
        </div>
        </div>
       
    )
}

export default FaceRecognition 
