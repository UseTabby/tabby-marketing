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
            Tabby is a simplified GitHub issue management tool, designed for increased productivity. Tabby allows you to remain focused and to organise your issues. Purrrfect.
          </p>
          <div className='actions'>
            <img src={Arrow} className='arrow-icon' alt='Arrow Icon' />
            <a href='http://eepurl.com/dPj3V5' target='_blank' rel="noopener noreferrer" className='display-3 medium'>Register interest</a>
          </div>
        </div>
        <div className='preview-parallax'>
          <img src={TabbyPreview} className='preview' alt='Preview of Tabby App' />
        </div>
      </section>
    )
  }
}

export default Hero
