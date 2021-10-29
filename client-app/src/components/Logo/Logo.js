import React from 'react'
import Tilt from 'react-tilt'
import './style.css'
import brain from './brain.png'


function Logo() {
    return (
        <div className="ma4 mt0  ">
            <Tilt className="Tilt br1 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150, }} >
                <div className="Tilt-inner " style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}> <img className=" pt4  center  w3  " src={brain} /></div>
            </Tilt>

        </div>
    )
}

export default Logo
