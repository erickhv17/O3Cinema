import React, { Component } from "react";
import NavBar from "./navBar";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const { movies } = this.props;
    const listMovies =
      movies && movies.length ? (
        movies.map((movie, index) => {
          return (
            <Card key={index}>
              <Card.Header as="h5">{movie.Title}</Card.Header>
              <Card.Body>
                <Card.Img
                  variant="left"
                  src={movie.Poster ? movie.Poster : ""}
                />
                <Card.Title> {movie.Released}</Card.Title>
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
        <NavBar />
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
