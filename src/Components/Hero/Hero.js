import React, { Component } from 'react'
import TabbyPreview from '../../Assets/Images/tabby-preview.png'
import './Hero.scss'

class Hero extends Component {
  render() {
    return (
      <section className='hero'>
        <div className='bg-block' / >
        <img src={TabbyPreview} alt='Preview of Tabby App' className='tabby-preview' />
      </section>
    )
  }
}

export default Hero
