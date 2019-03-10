import React, { Component } from 'react';
import './index.css';
import ProductCard from '../../components/productCard';


class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <ProductCard products={this.props.products} addItem={this.props.addItem} />
        </div>
      </div>
    );
  }
}

export default Home;
