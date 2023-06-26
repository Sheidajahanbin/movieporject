import React, { Component } from "react";
import postermovies from "../../style/postermovies.scss";
class Postermovie extends Component {
  render() {
    const { title, directory, year, genre, IMG } = this.props;
    // const { images } = this.props;
    return (
      <>
        <div className="boxPoster">
          <div >
            <img src={IMG} className="poster"/>
          </div>
          <div className="sectionTitle">
          <p className="title">{title}</p>
          <p className="dir">{directory}</p>
          <span>{year}</span>
          <p className="genra">{genre}</p>
        </div>
        </div>
      </>
    );
  }
}

export default Postermovie;
