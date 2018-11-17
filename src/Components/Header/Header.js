import React, { Component } from 'react'
import Logo from '../../Assets/Images/logo.svg'
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <a href='/'><img src={Logo} alt='Tabby App Logo' className='logo' /></a>
        <h4 className='page-title'>{this.props.title}</h4>
        <button>Register Your Interest</button>
      </header>
    )
  }
}

export default Header;
