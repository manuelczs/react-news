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
    //const URL = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-13&sortBy=publishedAt&apiKey=${API_KEY}`;
    const URL_ASIDE = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
    axios.get(URL_ASIDE).then((response) => {
      const allResponse = response.data.articles;
      console.log(allResponse);
      this.setState({
        newsData: allResponse,
      });
    });
    //    axios.get(URL_ASIDE).then((response) => {
    //  const allResponse = response.data.articles;
    //  console.log(allResponse);
    //  this.setState({
    //    asideData: allResponse,
    //  });
    //});
  }

  render() {
    return (
      <div className="App mb-4">
        <div>
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
              <img
                src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
                loading="lazy"
              />
              News Portal
            </a>
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
