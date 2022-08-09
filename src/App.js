import './App.css';
import React from 'react'
import Row from './Row';
import requests from './requests.js'
import Banner from './Banner'
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="Best Rated"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />

    </div>
  );
}

export default App;
