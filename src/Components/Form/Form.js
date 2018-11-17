import React, { Component } from 'react'
import './Form.scss'

// Dependicines Imports
import MailchimpSubscribe from "react-mailchimp-subscribe"

// Component Imports
import ContentBlock from '../ContentBlock/ContentBlock'

// Config
const url = "//usetabby.us19.list-manage.com/subscribe/post?u=2854621da172531f2d046ccb8&amp;id=f32b97f51c";

class Hero extends Component {

  doSomething = function(e){
    e.preventDefault();
  }

  render() {
    return (
      <form id='email-form' onSubmit={this.doSomething}>
        <ContentBlock title='Get Notified' text=' when I launch the first version of Tabby.' />
        <MailchimpSubscribe url={url} />
        <span>Planned v1.0.0 ready in 2 months 6 days</span>
      </form>
    )
  }
}

export default Hero
