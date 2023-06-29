import React, { Component } from "react";
import searchmovie from "../../style/searchmovie.scss";
import Boxsearch from "./Boxsearch";
import Btnssearch from "./Btnssearch";
import { Link } from "react-router-dom";

class Searchmovie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ...arrygenre } = this.props;
    return (
      <div className="btnCenter">
        <div>
          <Link to="Btnssearch/">{arrygenre[5]}</Link>
        </div>
      </div>
    )
  }
}

export default Searchmovie;
