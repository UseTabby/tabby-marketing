import React, { Component } from 'react';

// Component Imports
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const ReactMarkdown = require('react-markdown')

class Privacy extends Component {
  constructor(){
    super()

    this.state = {
      aboutData: {
        gistBody: ''
      }
    }
  }

  componentDidMount(){
    let gistURL = 'https://api.github.com/gists/e8e6219a11c36879eccd05ecb7a7205e'

    console.log(gistURL)

    fetch(gistURL).then(response =>
      response.json()
    ).then(data => {
      this.setState({
        aboutData: {
          gistBody: data.files['TabbyPrivacy.md'].content
        }
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
          <div className='spacefix'></div>
          <div id='timeline'>
            <ReactMarkdown source={this.state.aboutData.gistBody} />
          </div>
        <Footer />
      </div>
    )
  }
}

export default Privacy;
