import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './Footer.scss';

// Import Images
import Iconset from '../../Assets/Iconset.svg';

// Mailchimp Config
const url = "https://usetabby.us19.list-manage.com/subscribe/post?u=2854621da172531f2d046ccb8&amp;id=f32b97f51c";

class Footer extends Component {

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <footer>
        <h2>Get Notified</h2>
        <p className='outro body-one regular midtone'>Tabby is a self-funded solo project. I work on it when I can but plan to have it ready <span className='strikethrough'>tomorrow. next week.</span> Janunary 1st 2019.</p>
        <form id='mailchimpForm' onClick={this.handleClick}>
          <MailchimpSubscribe url={url}/>
        </form>
        <span className='footer-footnote footnote regular light'>I also hate spam, you’ll get none from me. Just one email when Tabby is ready.</span>
        <div className='mini'>
          <span className='footnote regular light'>Made by <a href='#'>Dan</a></span>
          <img src={Iconset} alt='Set of Icons' className='iconset' />
        </div>
      </footer>
    );
  }
}

export default Footer;
