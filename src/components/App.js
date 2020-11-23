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
      newsData: [],
      asideData: [],
    };
  }

  componentDidMount() {
    axios.get('https://manux.ar/apinews').then((response) => {
      console.log(response.articles);
      this.setState({
        newsData: response.articles,
        asideData: response.articles,
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
          <News items={this.state.newsData} />
          <Aside items={this.state.asideData} />
        </div>

        <div className="card-footer mt-4 pt-4">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
