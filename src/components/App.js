import React from 'react';
import './App.css';
import News from './News/News';
import Footer from './Footer/Footer';
import Aside from './Aside';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      news1: [],
      news2: [],
    };
  }

  componentDidMount() {
    axios.get('https://manux.ar/apinews').then((response) => {
      this.setState({
        news1: response.data.news1.articles,
        news2: response.data.news2.articles,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="app-styles">
          <nav className="navbar">
            <a className="navbar-brand" href="/">
              <i className="fas fa-rss-square fas-styles"></i>
              <span className="news-portal">React News Portal</span>
              <span className="news-portal">
                <small className="">A simple app using Axios</small>
              </span>
            </a>
          </nav>
        </div>
        <div className="container-fluid row">
          <News items={this.state.news1} />
          <Aside items={this.state.news2} />
        </div>

        <div className="card-footer mt-4 pt-4">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
