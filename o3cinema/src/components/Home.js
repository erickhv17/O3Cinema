import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";
import error from "../styles/error.png";

class Home extends Component {
  render() {
    const { movies } = this.props;
    const listMovies =
      movies && movies.length ? (
        movies.map((movie, index) => {
          return (
            <Card style={{ display: "flex", flexDirection: "row" }} key={index}>
              <Card.Img
                style={{ flex: 1 }}
                width="80%"
                className="card-image"
                src={movie.Poster !== "N/A" ? movie.Poster : error}
              />
              <Card.Body>
                <Card.Title> {movie.Title}</Card.Title>
                <Card.Subtitle> {movie.Released}</Card.Subtitle>
                <Card.Text>{movie.Plot}</Card.Text>
                <Link to={"/" + movie.imdbID}>
                  <Button variant="primary">More Details</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <div className="center">No movies to show</div>
      );
    return (
      <div>
        <div className="container">
          <h4 className="center">Search Results</h4>
          {listMovies}
        </div>
      </div>
      //if (no search)? : mensaje no peliculas : listPelicas
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(Home);
