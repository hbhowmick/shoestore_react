import React, { Component } from 'react';
import './index.css';
import CheckoutTable from '../../components/checkoutTable';


class Checkout extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <CheckoutTable cart={this.props.cart} total={this.props.total} removeItem={this.props.removeItem} />
        </div>
      </div>
    );
  }
}

export default Checkout;
