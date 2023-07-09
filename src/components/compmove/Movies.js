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
      moveis: [],
      filterGenre: [],
      isError: false,
      genres: [],
      searchTitle: "",
    };
  }
  //////////////////////////////////////////////////////////////////////////////////
  componentDidMount = () => {
    axios
      .get("movies.json")
      .then((response) =>
        this.setState({ posts: response.data, moveis: response.data }, () =>
          this.filterGenreHandler()
        )
      )

      .catch(() => this.setState({ isError: true }));
  };

  filterGenreHandler = () => {
    var arry = [];
    this.state.posts.map((post) => {
      const genres = post.Genre.split(", ");

      genres.map((genre) => {
        if (arry.indexOf(genre) === -1) {
          arry.push(genre);
        }
      });
    });

    this.setState({ genres: arry });
  };
  ////////////////////////////////////////////////////////////////////////
  ChangeSearch = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      posts: this.state.moveis.filter((move) =>
        move.Title.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };

  ////////////////////////////////////////////////////////////////////////////
  addRemoveGenre = (genre) => {
    const index = this.state.filterGenre.indexOf(genre);
    if (index === -1) {
      this.state.filterGenre.push(genre);
    } else {
      this.state.filterGenre.splice(index, 1);
    }
  };
  ///////////////////////////////////////////////////////////////////
  filterBygenreHandler = (genre) => {
    this.addRemoveGenre(genre);
    let temp = [];
    this.state.filterGenre.map((genre) => {
      const selMovie = this.state.moveis.filter((movei) =>
        movei.Genre.includes(genre)
      );
      selMovie.map((move) => {
        if (temp.indexOf(move) === -1) {
          temp.push(move);
        }
      });
      console.log(temp);
    });
    this.setState({ posts: temp });
  };
  ///////////////////////////////////////////////////////////////////
  render() {
    const { isError, posts, images, genres } = this.state;
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
                type="text"
                name="searchTitle"
                id="search"
                placeholder="search by movie title.."
                value={this.state.name}
                onChange={this.ChangeSearch}
              />
            </div>
            <div className="btn-genre">
              {genres.map((genre, index) => (
                <button
                  key={index}
                  onClick={() => this.filterBygenreHandler(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
