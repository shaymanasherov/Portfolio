import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Skills from './components/Pages/Skills';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>

          <Route
          extact={true}
          path="/"
          component={Home}
          />

          <Route
          path="/about"
          component={About}
          /> 

          <Route
          path="/skills"
          component={Skills}
          /> 

      </PageWrapper>
      </Router>
    );
  }
}

export default App;
