import React from 'react';

class NewSingle extends React.Component {
  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    const modalValues = {
      title: this.props.item.title,
      author: this.props.item.author,
      description: this.props.item.description,
      urlToImage: this.props.item.urlToImage,
    };

    this.props.openModal(modalValues);
  }

  render() {
    return (
      <div
        className="card card-styles mt-4 mr-3 ml-3"
        style={{ width: '18rem' }}
      >
        <img src={this.props.item.urlToImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.item.title}</h5>
        </div>
        <button
          onClick={this.openModal}
          type="button"
          className="btn-styles"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Full View
        </button>
      </div>
    );
  }
}

export default NewSingle;
