import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './views/home';
import Checkout from './views/checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'products': [],
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/checkout' render={() => <Checkout />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
