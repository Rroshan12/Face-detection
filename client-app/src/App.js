import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/Form/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css'
import FaceRecognition from './components/FaceRecogination/FaceRecognition '
import Particles from 'react-particles-js';

function App() {
  const props= "helo"
  return (
    <div className="App">
      <Particles className="particles"
    params={{
	    "particles": {
        line_linked:{
          shadow:{
            enable:true,
            color:'#3CA9D1',
            blur: 5
          }
        }
	        
	    
	} }}/>
      <Navigation />
      <Logo />
     
      <ImageLinkForm />
      <Rank />
      
       <FaceRecognition props={props} /> 




    </div>
  )
}

export default App

