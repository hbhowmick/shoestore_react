import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './views/home';
import products from './products.js';
import Checkout from './views/checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'products' : [],
      'cart' : [],
      'total' : 0.00.toFixed(2),
    }
    this.calcTotal = this.calcTotal.bind(this);
  }

  componentWillMount() {
    this.setState({ 'products': products });
  }

  addItem = id => {
    let cart = this.state.cart;

    for (let i in products) {
      if (products[i].id === id) {
        cart.push(products[i]);
        break;
      }
    }
    this.calcTotal();
    this.setState({ 'cart': cart });
  }


  removeItem = id => {
    let cart = this.state.cart;

    for (let i in cart) {
      if (cart[i].id === id) {
        cart.splice(i, 1);
        break;
      }
    }
    this.calcTotal();
    this.setState({ 'cart': cart });
  }


  calcTotal() {
    let cart = this.state.cart;
    let total = 0;

    for (let i in cart) {
      total += cart[i].price
    }
    total = total.toFixed(2);
    this.setState({ 'total': total });
  }


  render() {
    return (
      <div className="App">
        <Header total={this.state.total}/>
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Home products={this.state.products} addItem={this.addItem} />} />
            <Route exact path='/checkout' render={() => <Checkout cart={this.state.cart} total={this.state.total} removeItem={this.removeItem} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
