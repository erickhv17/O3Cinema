import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import error from "../styles/error.png";

class Movie extends Component {
  render() {
    const { movie } = this.props;
    const ratingTomatoes = movie
      ? movie.Ratings.find((e) => {
          return e.Source === "Rotten Tomatoes";
        })
      : "Not available";

    return movie ? (
      <div className="container">
        <Jumbotron>
          <div className="row">
            <div className="col-md-4">
              <h1>{movie.Title}</h1>
            </div>

            <div className="col-md-8">
              <p style={{ textAlign: "right" }}>
                {ratingTomatoes
                  ? ratingTomatoes.Value
                  : "Rating tomatoes not available"}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : error}
                alt="..."
                class="img-thumbnail"
              />
            </div>
            <div className="col-md-6">
              <h5 style={{ textAlign: "left" }}>General information</h5>
              <div className="row">
                <div className="col-md-6" style={{ textAlign: "left" }}>
                  <p> {"Year " + movie.Year}</p>
                </div>
                <div className="col-md-6">
                  <p> {"Run time:  " + movie.Runtime}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6" style={{ textAlign: "left" }}>
                  <p> {"Rated " + movie.Rated}</p>
                </div>

                <div className="col-md-6">
                  <p> {"Released " + movie.Released}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6" style={{ textAlign: "left" }}>
                  <p> {"Genre " + movie.Genre}</p>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    ) : (
      <div> no se encontro nada </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.movie_id;
  return {
    movie: state.movies.find((movie) => movie.imdbID === id),
  };
};

export default connect(mapStateToProps)(Movie);
