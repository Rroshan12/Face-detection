import React from 'react'
import "./style.css"

function ImageLinkForm({onInputChange,onSubmit}) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column',
            
        }}>
            <p className='f3'>
                {'This is the magic brain, it will detect face from image'}
            </p>
            <div style={{
            display: 'flex'
        }} className=" form center shadow-5 br3 pa3">
                <input className='f4 pa2  w-70 ' type="text "  onChange={onInputChange}/>
                <button className="w-30 grow f4 link ph3  pv2 dib white bg-light-purple    " onClick={onSubmit}>Detect</button>


            </div>

        </div>
    )
}

export default ImageLinkForm
