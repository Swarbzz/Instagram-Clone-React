import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri : "http://localhost:4000"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname="George" avatar="https://pbs.twimg.com/profile_images/739024152187797504/xWAHF_Yu_400x400.jpg" caption="Headshot" image="https://s3-eu-west-1.amazonaws.com/images.castcall.blue-compass.com/portfolioraw/1568/1568547.jpg" />
          {/* add more posts here */}
        </section>
      </div>
    );
  }
}
export default App;
