import React, { Component } from 'react';
import './Form.scss';

// Icon
import Icon from '../../Assets/icon.svg';

class Form extends Component {
  render() {
    return (
      <section className='form'>
        <h2>Get Notified</h2>
        <p>Tabby is a self-funded solo venture. I work on it when I can but plan to have it ready in 2 months and 5 days.</p>
        <div className='formBox'>
          Here
        </div>
        <span className='footnote'>I also hate spam, you’ll get none from me. Just one email when Tabby is ready.</span>
      </section>
    );
  }
}

export default Form;
