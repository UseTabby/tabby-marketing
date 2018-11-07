import React, { Component } from 'react';
import './Hero.scss';

// Import Images
import AppIcon from '../../Assets/appIcon.svg'

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <img src={AppIcon} alt='Tabby App Icon' className='app-icon' />
        <h1>Meet Tabby</h1>
        <p className='intro body-one regular midtone'>GitHub issue tracking redesigned to help you stay organized and stay focused on your issues.</p>
        <span className='coming-date body-two medium midtone'>Coming January 1st 2019</span>
      </div>
    );
  }
}

export default Hero;
