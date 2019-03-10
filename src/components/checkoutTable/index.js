import React, { Component } from 'react';
import './index.css';
import CheckoutItem from '../../components/checkoutItem';

class CheckoutTable extends Component {
  render() {
    return (
      <div>
        <table className="table table-dark">
         <thead>
          <tr>
            <th>Qty</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
         </thead>
           <CheckoutItem cart={this.props.cart} total={this.props.total} removeItem={this.props.removeItem} />
         <tfoot>
          <tr>
            <td colSpan="2">Total:</td>
            <td colSpan="2" className="total">${this.props.total}</td>
          </tr>
         </tfoot>
        </table>
      </div>
    );
  }
}

export default CheckoutTable;
