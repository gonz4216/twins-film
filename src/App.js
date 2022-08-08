import './App.css';
import React from 'react'
import Row from './Row';
import requests from './requests.js'

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Row title="BEST RATED" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
