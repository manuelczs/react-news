import React from 'react';

class NewSingle extends React.Component {
  render() {
    return (
      <div className="card mt-4 mr-3 ml-3" style={{ width: '18rem' }}>
        <img src={this.props.item.urlToImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.item.title}</h5>
        </div>

        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          View
        </button>

        <div
          class="modal fade bd-example-modal-lg"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {this.props.item.title}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div>
                  <img className="img-fluid" src={this.props.item.urlToImage} />
                </div>
                <div>{this.props.item.description}</div>
              </div>
              <div class="modal-footer">
                <p className="">Author: {this.props.item.author}</p>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewSingle;
