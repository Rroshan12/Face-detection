import React,{Component} from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/Form/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css'
import FaceRecognition from './components/FaceRecogination/FaceRecognition '
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey:'b9bc6e1e42a44d7c8f4d3c50c17d1621'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl:'',
      box:{},
    }
  }

onInputChange = (e) => {
  e.preventDefault();
   

    this.setState({input: e.target.value});
    

  }

  calculateFaceLocation = (data) =>
  {
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
  displayFaceBox = (box) =>
  {
    console.log(box);
    
    this.setState({box: box})
   
  }

onSubmit = () =>{
    this.setState({imageUrl: this.state.input});
  app.models
      .predict('f76196b43bbd45c99b4f3cd8e8b40a8a', this.state.input).then(
        response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));

     

      }

      

 
  render() {

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

        <Navigation />
        <Logo />
        <Rank />

        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />


        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />




      </div>
    )
  }
}

export default App

