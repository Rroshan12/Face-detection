import React from 'react'

function Rank({name}) {
    return (
        <div className="center pa3">
            <div className='white f3'>
                {name +', your current rank is'}
            </div>

            <div className='white f1'>
                {'#' } 
            </div>
            
        </div>
    )
}

export default Rank
