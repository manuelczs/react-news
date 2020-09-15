import React, { Component } from 'react';

class NewsAside extends Component {
  render() {
    return (
      <>
        <div className="mt-4 mr-2 ml-2 text-justify">
          <p className="">
            <a href={this.props.item.url} style={{ textDecoration: 'none' }}>
              {this.props.item.title}
            </a>
          </p>
        </div>
        <div className="divider"></div>
      </>
    );
  }
}

export default NewsAside;
