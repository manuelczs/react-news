import React, { Component } from 'react';
//import NewSingle from '../News/NewSingle';
import NewsAside from '../News/NewsAside';

class Aside extends Component {
  constructor() {
    super();
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems = (items) => {
    return items.map((item) => <NewsAside item={item} />);
  };
  render() {
    return <div className="col-md-3">{this.renderItems(this.props.items)}</div>;
  }
}

export default Aside;
