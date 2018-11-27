import React, { Component } from 'react'
import LogoInline from '../../Assets/Images/logo.svg'
import './Header.scss'

class Header extends Component {

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {

    let scrollPosY = window.pageYOffset | document.body.scrollTop

    if(scrollPosY > 25){
      document.getElementById('nav').classList.add('scrolled')
    } else if (scrollPosY <= 25){
      document.getElementById('nav').classList.remove('scrolled')
    }
  }

  render() {
    return (
      <header id='nav'>
        <a href='/whats-new' className='dark body-small medium'>What's New</a>
        <a href='/about' className='dark body-small medium'>About</a>
          <div className='img-clip'>
            <img src={LogoInline} alt='Tabby App Logo' />
          </div>
        <a href='/register' className='body-small medium'>Register Interest</a>
      </header>
    )
  }
}

export default Header;
