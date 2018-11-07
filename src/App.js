import React, { Component } from 'react';
import './App.scss';

// Import Components
import Hero from './Components/Hero/Hero';
import Preview from './Components/Preview/Preview';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Preview />
        <Footer />
      </div>
    );
  }
}

export default App;
