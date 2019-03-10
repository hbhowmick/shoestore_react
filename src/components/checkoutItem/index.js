import React, { Component } from 'react';
import './index.css';

class CheckoutItem extends Component {
  render() {
    return (
      <tbody>
        { this.props.cart &&
          this.props.cart.map( item =>
            <tr key={item.id}>
              <td>1</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button className="btn btn-danger" onClick={() => this.props.removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          )
        }
      </tbody>
    );
  }
}

export default CheckoutItem;
