import React, { Component } from 'react'
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer>
        Give feedback on <a href=''>GitHub</a>
        ·<a href='/about'>About</a>
        ·<a href='/privacy'>Privacy</a>
        <span>© 2018 Tabby</span>
      </footer>
    )
  }
}

export default Footer
