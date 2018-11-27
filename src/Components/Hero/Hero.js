import React, { Component } from 'react'
import TabbyPreview from '../../Assets/Images/tabby-preview.png'
import Arrow from '../../Assets/Images/arrow.svg'
import './Hero.scss'

class Hero extends Component {
  render() {
    return (
      <section className='hero'>
        <div className='hero-cont'>
          <h1 className='secondary'>Issue management is coming.</h1>
          <p className='body-large'>
            Tabby is GitHub issue management reimaged. Intended to keep you focused and productive, Tabby is going to soon be coming to a screen near you so watch out for that please thanks.
          </p>
          <div className='actions'>
            <img src={Arrow} className='arrow-icon' alt='Arrow Icon' />
            <a href='' className='display-3'>Register interest</a>
            <img src={Arrow} className='arrow-icon' alt='Arrow Icon' />
            <a href='' className='display-3'>Learn more</a>
          </div>
        </div>
        <img src={TabbyPreview} className='preview' alt='Preview of Tabby App' />
      </section>
    )
  }
}

export default Hero
