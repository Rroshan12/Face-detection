import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/Form/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css'
import FaceRecognition from './components/FaceRecogination/FaceRecognition '
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'

const app = new Clarifai.App({
  apiKey: 'b9bc6e1e42a44d7c8f4d3c50c17d1621'
});


const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn : false,
  user: {
    _id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    console.log(data);
    this.setState({user: {
      id: data._id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange = (e) => {
    e.preventDefault();


    this.setState({ input: e.target.value });


  }

  calculateFaceLocation = (data) => {
    console.log(data);

    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }

  }
  displayFaceBox = (box) => {

    this.setState({ box: box })

  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict('f76196b43bbd45c99b4f3cd8e8b40a8a', this.state.input).then(
        response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));



  }

  onRouteChange = (route) =>{
  

    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }

   
    this.setState({route: route});



  }




  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;

    return (
      <div className="App">
        <Particles className="particles"
          params={{
            "particles": {
              line_linked: {
                shadow: {
                  enable: true,
                  color: '#3CA9D1',
                  blur: 5
                }
              }


            }
          }} />

        
           
          
       
{ route === 'home'
          ? <div>
            <Navigation  isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
        


      </div>
    )
  }
}

export default App

