import React from 'react';
import './App.css';
import News from './News/News';
import Footer from './Footer/Footer';
import Aside from './Aside';
import MyApiClient from '../client';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newsData: [],
      asideData: [],
    };
  }

  componentDidMount() {
    MyApiClient.get('Axios client').then((res) => {
      this.setState({
        newsData: [],
      });
    });
  }

  render() {
    return (
      <div className="App mb-4">
        <div>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img
                src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
                loading="lazy"
              />
            </a>
            <span>React News Portal</span>
          </nav>
        </div>
        <div className="container-fluid row">
          <News items={this.state.newsData} />
          <Aside items={this.state.newsData} />
        </div>

        <div className="card-footer mt-4 pt-4">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
