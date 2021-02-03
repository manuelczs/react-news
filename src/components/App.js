import React from 'react';
import './App.css';
import News from './News/News';
import Footer from './Footer/Footer';
import Aside from './Aside';
import axios from 'axios';

const API_KEY = '4007110774184dce9a8ef9ec2d7c286d';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newsData: [],
      asideData: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=tesla&from=2021-01-03&sortBy=publishedAt&apiKey=${API_KEY}`
      )
      .then((response) => {
        this.setState({
          newsData: response.data.articles,
        });
      });
    axios
      .get(
        `http://newsapi.org/v2/everything?q=apple&from=2021-02-02&to=2021-02-02&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((response) => {
        this.setState({
          asideData: response.data.articles,
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
