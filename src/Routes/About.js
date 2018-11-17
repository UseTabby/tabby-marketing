import React, { Component } from 'react';

// Component Imports
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import '../Assets/Styles/md.scss'

const ReactMarkdown = require('react-markdown')

class About extends Component {
  constructor(){
    super()

    this.state = {
      aboutData: {
        gistBody: ''
      }
    }
  }

  componentDidMount(){
    let gistURL = 'https://api.github.com/gists/53263d80f087bd007d2473d13db6d477'

    console.log(gistURL)

    fetch(gistURL).then(response =>
      response.json()
    ).then(data => {
      this.setState({
        aboutData: {
          gistBody: data.files['aboutTabby.md'].content
        }
      })
    })
  }

  render() {
    return (
      <div>
        <Header title='About' />
          <div id='ReactMarkdown'>
            <ReactMarkdown source={this.state.aboutData.gistBody} />
          </div>
        <Footer />
      </div>
    )
  }
}

export default About;
