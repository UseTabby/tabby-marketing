import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './Form.scss';

// Icon
import Icon from '../../Assets/icon.svg';

const url = "https://usetabby.us19.list-manage.com/subscribe/post?u=2854621da172531f2d046ccb8&amp;id=f32b97f51c";

class Form extends Component {
  render() {
    return (
      <section className='form'>
        <h2>Get Notified</h2>
        <p>Tabby is a self-funded solo project. I work on it when I can but plan to have it ready <span className='strike'>tomorrow. next week.</span> Janunary 1st 2019.</p>
        <div className='formBox'>
          <MailchimpSubscribe url={url}/>
        </div>
        <span className='footnote'>I also hate spam, you’ll get none from me. Just one email when Tabby is ready.</span>
      </section>
    );
  }
}

export default Form;
