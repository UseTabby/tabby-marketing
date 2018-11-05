import React, { Component } from 'react';
import './Hero.scss';

// Icon
import Preview from '../../Assets/preview.png';

class Hero extends Component {
  render() {
    return (
      <section className='hero'>
        <img src={Preview} className='preview' />
      </section>
    );
  }
}

export default Hero;
