import React, { Component } from 'react';
import './index.css';

class SelectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 8.5};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          Select size:
          <select value={this.state.value} onChange={this.handleChange}>
            { this.props.sizes &&
              this.props.sizes.map( size =>
                <option key={size}>{size}</option>
              )
            }
          </select>
          <div>
            {this.addSize}
          </div>
        </label>
      </form>
    );
  }
}

export default SelectItem;
