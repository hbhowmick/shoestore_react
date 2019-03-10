import React, { Component } from 'react';
import './index.css';
import SelectItem from '../../components/selectItem';

class ProductCard extends Component {
  handleSubmit = (event) => {
      event.preventDefault();
    }

  render() {
    return (
      <div className="row">
        { this.props.products &&
          this.props.products.map( item =>
            <div className="col-md-4" key={item.id}>
              <div className="card">
                <div className="card-title">{item.name}</div>
                <div className="card-subtitle">${item.price}</div>
                <div className="card-text">{item.desc}</div>
                <SelectItem sizes={item.sizes} />
                <button className="btn btn-success" onClick={() => this.props.addItem(item.id)}>Add to Cart</button>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default ProductCard;
