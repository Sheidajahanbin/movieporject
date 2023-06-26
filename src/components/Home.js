import React, { Component } from "react";
import "../style/home.scss";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [
        "images/slider/sld1.jpg",
        "images/slider/sld2.jpg",
        "images/slider/sld3.jpg",
        "images/slider/sld4.jpg",
        "images/slider/sld5.jpg",
      ],
      index: 0,
    };
  }

  NextHandler = () => {
    var btn = document.querySelectorAll(".btn1");
    const { index, slider } = this.state;
    this.setState({ index: index + 1 });

    if (index + 1 >= slider.length) {
      this.setState({ index: 0 });
    }
  };
  PrevHandler = () => {
    const { index, slider } = this.state;
    this.setState({ index: index - 1 });
    if (index - 1 <= 0) {
      this.setState({ index: slider.length - index });
    }
  };
  componentDidMount = () => {
    setInterval(() => {
      this.NextHandler();
    }, 2000);
  };

  render() {
    const { slider, index } = this.state;

    return (
      <>
        <div className="container-slider">
          <img src={slider[index]} alt="" />
          <div className="arrow">
            <div onClick={this.PrevHandler}>
              <i className="fa fa-angle-double-left "></i>
            </div>
            <div onClick={this.NextHandler}>
              <i className="fa fa-angle-double-right "></i>
            </div>
          </div>
          <div className="btn">
            <div className="btn1"></div>
            <div className="btn1"></div>
            <div className="btn1"></div>
            <div className="btn1"></div>
            <div className="btn1"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
