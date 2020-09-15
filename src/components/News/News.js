import React, { Component } from 'react';
import NewSingle from './NewSingle';
import ModalNew from '../ModalNew/ModalNew';

class News extends Component {
  constructor() {
    super();
    this.state = {};
    this.renderItems = this.renderItems.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal(e) {
    const { title, author, urlToImage, description } = e;
    this.setState({
      title,
      author,
      urlToImage,
      description,
    });
  }

  renderItems = (items) => {
    return items.map((item) => (
      <NewSingle item={item} openModal={this.openModal} />
    ));
  };

  render() {
    return (
      <div className="container-fluid col-md-9">
        <div className="d-inline-flex p-2 bd-highlight justify-content-center row">
          {this.renderItems(this.props.items)}
        </div>
        <ModalNew
          title={this.state.title}
          author={this.state.author}
          description={this.state.description}
          urlToImage={this.state.urlToImage}
        />
      </div>
    );
  }
}

export default News;
