import React, { Component } from 'react';
import './index.css';
import HomeTable from '../../components/homeTable'

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <HomeTable  />
        </div>
      </div>
    );
  }
}

export default Home;
