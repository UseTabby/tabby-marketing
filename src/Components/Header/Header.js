import React, { Component } from 'react';
import './Header.scss';

// Icon
import Icon from '../../Assets/icon.svg';

class App extends Component {
  render() {
    return (
      <header>
        <img src={Icon} />
        <h1>Meet Tabby</h1>
        <p>GitHub issue tracking redesigned to help you stay organized and stay focused on your issues.</p>
        <span>Coming January 1st 2019</span>
      </header>
    );
  }
}

export default App;
