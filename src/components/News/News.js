import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor() {
    super();
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems = (items) => {
    return items.map((item) => <NewSingle item={item} />);
  };

  render() {
    return (
      <div className="container-fluid col-md-9">
        <div className="d-inline-flex p-2 bd-highlight justify-content-center row">
          {this.renderItems(this.props.items)}
        </div>
      </div>
    );
  }
}

export default News;
