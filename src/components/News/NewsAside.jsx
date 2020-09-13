import React, { Component } from 'react';

class NewsAside extends Component {
  render() {
    return (
      <div className="mt-4 mr-2 ml-2 text-justify">
        <p className="">{this.props.item.title}</p>
      </div>
    );
  }
}

export default NewsAside;
