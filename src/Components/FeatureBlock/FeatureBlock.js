import React, { Component } from 'react';
import './FeatureBlock.scss';

class FeatureBlock extends Component {
  render() {
    return (
      <div className='feature-block'>
        <img src={this.props.img} alt='Illustration of feature' />
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default FeatureBlock;
