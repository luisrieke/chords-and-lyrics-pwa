import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./styles.css";
import Overkill from "./songs/Overkill";
import Wonderwall from "./songs/Wonderwall";
import ScrollToTop from "./components/ScrollToTop";
import {
  toggleScroll,
  increaseSpeed,
  decreaseSpeed,
  toggleMode,
} from "./scrollHelper";

const Home = () => (
  <div className="song-list">
    <div className="mode-switcher">
      <button id="modeButton" onClick={toggleMode}>
        🌞
      </button>
    </div>
    <h1>Chords & Lyrics</h1>
    <img src="/logo512.png" alt="Logo" className="logo" />
    <h2>Song List</h2>
    <ul>
      <li>
        <Link to="/overkill">Overkill - Colin Hay</Link>
      </li>
      <li>
        <Link to="/wonderwall">Wonderwall - Oasis</Link>
      </li>
    </ul>
  </div>
);

const SongLayout = ({ children }) => (
  <div>
    <div className="home-button-container">
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
    </div>
    <div className="mode-switcher">
      <button id="modeButton" onClick={toggleMode}>
        🌞
      </button>
    </div>
    {children}
    <div className="controls">
      <button id="scrollButton" onClick={toggleScroll}>
        Scroll
      </button>
      <button className="control-button" onClick={increaseSpeed}>
        +
      </button>
      <button className="control-button" onClick={decreaseSpeed}>
        -
      </button>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/overkill"
            element={
              <SongLayout>
                <Overkill />
              </SongLayout>
            }
          />
          <Route
            path="/wonderwall"
            element={
              <SongLayout>
                <Wonderwall />
              </SongLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
