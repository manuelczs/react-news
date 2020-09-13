import React from 'react';

class NewSingle extends React.Component {
  render() {
    return (
      <div className="card mt-4 mr-3 ml-3" style={{ width: '18rem' }}>
        <img src={this.props.item.urlToImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.item.title}</h5>

          <a href={this.props.item.url} className="btn btn-primary">
            View Maximize
          </a>
        </div>
      </div>
    );
  }
}

export default NewSingle;
