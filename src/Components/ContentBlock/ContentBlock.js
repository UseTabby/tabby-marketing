import React, { Component } from 'react';
import './ContentBlock.scss';

class ContentBlock extends Component {
  render() {
    return (
      <section id='content-block'>
        <h1>{this.props.title} <a href=''>{this.props.link}</a></h1>
        {this.props.text}
      </section>
    )
  }
}

export default ContentBlock;
