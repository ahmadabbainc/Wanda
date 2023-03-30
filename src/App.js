import React from "react";
import Rows from "./Rows";
import requests from "./requests";
import Navbar from "./Navbar";
import Banner from "./Banner";

import "./App.css";

const App = ({ title, fetchUrl, isLargeRow }) => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Rows
        title="WANDA ORIGINALS"
        fetchUrl={requests.fetchWandaOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHerroMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <div className="developer">
        Developed with love by
        <a href="https://ahmadinc.vercel.app"> Ahmad Inc.</a>
      </div>
    </div>
  );
};

export default App;
