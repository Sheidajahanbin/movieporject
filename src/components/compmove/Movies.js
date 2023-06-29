import React, { Component } from "react";
import Postermovie from "./Postermovie";
import Searchmovie from "./Searchmovie";
import movies from "../../style/movies.scss";
import axios from "axios";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "images/poster/1.jpg",
        "images/poster/2.jpg",
        "images/poster/3.jpg",
        "images/poster/4.jpg",
        "images/poster/5.jpg",
        "images/poster/6.jpg",
        "images/poster/7.jpg",
        "images/poster/8.jpg",
        "images/poster/9.jpg",
      ],

      posts: [],
      filterposts: [],
      isError: false,
      arrygenre: [],
      i: 0,
    };
  }
  componentDidMount = () => {
    this.getData();
  };
  getData = () => {
    axios
      .get("movies.json")
      .then((response) => this.setState({ posts: response.data }))
      // .then((response) => this.setState({ genres:Genre }))
      // .then((genres) => (console.log(genres)))
      .catch(() => this.setState({ isError: true }));
  };
  11;
  render() {
    const { isError, posts, images, genres, arrygenre, filterposts } =
      this.state;

    return (
      <div className="mainContainer">
        <div className="a">
          {isError ? (
            <h2>{isError}</h2>
          ) : (
            posts.map((post) => (
              <Postermovie
                key={post.Id}
                IMG={images[post.Id - 1]}
                title={post.Title}
                year={post.Year}
                genre={post.Genre}
                directory={post.Director}
              />
            ))
          )}
        </div>
        <div className="b">
          <div className="containerSearch">
            <div className="boxSearch">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search by movie title.."
              />
            </div>

            {posts.map((post) => {
              let temp = post.Genre.split(", ");

              temp.map((genre) => {
                filterposts: filterposts.push(genre);
               
              });

              const x = filterposts.filter(
                (item, index) =>
                  filterposts.indexOf(item) === index
              );
              this.setState({ arrygenre: x});
              {console.log(arrygenre)}

              <Searchmovie {...arrygenre} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
