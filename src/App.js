import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ReactGA from 'react-ga';

import Home from './Routes/Home'
import About from './Routes/About'
import Privacy from './Routes/Privacy'

ReactGA.initialize('UA-87309059-2');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/privacy' component={Privacy} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
