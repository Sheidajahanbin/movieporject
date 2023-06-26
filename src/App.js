import React, { Component } from "react";

import Home from "./components/Home";
import Movies from "./components/compmove/Movies";
import Aboutus from "./components/Aboutus";
import { Link, Routes, Route } from "react-router-dom";
import "./style/main.scss";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="link" to="movies">
              Movies
            </Link>
          </div>
          <div>
            <Link className="link" to="aboutus">
              About Us
            </Link>
          </div>
        </div>
        <div className="hr"></div>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
