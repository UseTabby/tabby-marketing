import React, { Component } from 'react';
import './Preview.scss';

// Import Images
import PreviewImage from '../../Assets/Preview.png';

class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <img src={PreviewImage} alt='Preview of Tabby app' className='preview-image' />
      </div>
    );
  }
}

export default Preview;
