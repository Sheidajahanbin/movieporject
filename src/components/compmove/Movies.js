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
    };
  }

  componentDidMount = () => {
    axios
      .get("movies.json")
      .then((response) =>
        this.setState({ posts: response.data, moveis: response.data }, () =>
          this.filterGenre()
        )
      )

      .catch(() => this.setState({ isError: true }));
  };

  filterGenre = () => {
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

    console.log(arry);
    console.log(this.state.genres);
  };
  ////////////////////////////////////////////////////////////////////////
  addRemoveGenre = (genre) => {
    const index = this.state.filterGenre.indexOf(genre);
    if (index === -1) {
      this.state.filterGenre.push(genre);
    } else {
      this.state.filterGenre.splice(index, 1);
    }
  };
  ///////////////////////////////////////////////////////////////////
  // filterBygenreHandle=(genre)=>{
  //  this.addRemoveGenre(genre);
  //  temp=[];
  //  this.state.filterGenre.map((genre)=>{
  // const selMovie =this.state.moveis.filter((movei)=>
  //   movei.Genre.includes(genre)
  //   );
  //   selMovie.map((move)=>{
  //     if(temp.indexOf(move)===-1){
  //       temp.push(move);
  //     }
  //   });
  //  }

  // }

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
                type="search"
                name="search"
                id="search"
                placeholder="search by movie title.."
              />
            </div >
            <div className="btn-genre">
            {genres.map((genre) => (
              <button>{genre}</button>
            ))}
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
