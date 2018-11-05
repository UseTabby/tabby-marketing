import React, { Component } from 'react';
import './Footer.scss';

// Icon
import Iconset from '../../Assets/icon-set.svg';

class Footer extends Component {
  render() {
    return (
      <footer>
        <span class='footnote'>Made by <a href='https://twitter.com/danthms'>Dan</a></span>
        <img src={Iconset} />
      </footer>
    );
  }
}

export default Footer;
