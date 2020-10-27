import React, { Component } from 'react';
import NewsAside from '../News/NewsAside';
import '@fortawesome/fontawesome-free/js/all.js';

class Aside extends Component {
  constructor() {
    super();
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems = (items) => {
    return items.map((item) => <NewsAside item={item} />);
  };
  render() {
    return (
      <div className="col-md-3 mt-4">
        <div>
          <h2>Other News</h2>
        </div>
        {this.renderItems(this.props.items)}
      </div>
    );
  }
}

export default Aside;
