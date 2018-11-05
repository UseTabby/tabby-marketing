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
        <p>GitHub issue tracking rethought and redesigned to write long enough copy to break onto three lines.</p>
        <span>Coming July 19th 2018</span>
      </header>
    );
  }
}

export default App;
