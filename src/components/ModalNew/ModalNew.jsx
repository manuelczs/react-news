import React, { Component } from 'react';

class ModalNew extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <img
                    className="img-fluid"
                    src={this.props.urlToImage}
                    alt={this.props.urlToImage}
                  />
                </div>
                <div>{this.props.description}</div>
              </div>
              <div className="modal-footer">
                <p className="">Author: {this.props.author}</p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ModalNew;
