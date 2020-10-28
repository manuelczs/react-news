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
    const API_KEY = '4007110774184dce9a8ef9ec2d7c286d';
    const URL = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
    const URL_ASIDE = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

    axios.get(URL_ASIDE).then((response) => {
      const allResponse = response.data.articles;
      this.setState({
        newsData: allResponse,
      });
      console.log(this.state.newsData);
    });

    axios.get(URL).then((response) => {
      const res = response.data.articles;
      this.setState({
        asideData: res,
      });
      console.log(this.state.asideData);
    });
  }

  render() {
    return (
      <div className="App mb-4">
        <div>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <i className="fas fa-rss-square"></i>
            </a>
            <span>React News Portal</span>
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
