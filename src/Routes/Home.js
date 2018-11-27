import React, { Component } from 'react';
import '../App.scss';

// Component Imports
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'

// Image Import
import FocusIllu from '../Assets/Images/focus-illu.svg'
import LoopIllu from '../Assets/Images/loop-illu.svg'

const ReactMarkdown = require('react-markdown')

class Home extends Component {
  constructor(){
    super()

    this.state = {
      aboutData: {
        gistBody: ''
      }
    }
  }

  componentDidMount(){
    let gistURL = 'https://api.github.com/gists/1368323e8f901de5622c556ba451d656'

    console.log(gistURL)

    fetch(gistURL).then(response =>
      response.json()
    ).then(data => {
      this.setState({
        aboutData: {
          gistBody: data.files['TabbyHome.md'].content
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <div id='timeline'>
          <ReactMarkdown source={this.state.aboutData.gistBody} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
