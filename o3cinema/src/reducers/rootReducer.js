const initState = {
  movies: [],
};

let movies = [
  {
    Title: "Batman",
    Year: "1989",
    Rated: "PG-13",
    Released: "23 Jun 1989",
    Runtime: "126 min",
    Genre: "Action, Adventure",
    Director: "Tim Burton",
    Writer:
      "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)",
    Actors: "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
    Plot:
      "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language: "English, French, Spanish",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 8 wins & 26 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.5/10" },
      { Source: "Rotten Tomatoes", Value: "71%" },
      { Source: "Metacritic", Value: "69/100" },
    ],
    Metascore: "69",
    imdbRating: "7.5",
    imdbVotes: "329,552",
    imdbID: "tt0096895",
    Type: "movie",
    DVD: "25 Mar 1997",
    BoxOffice: "N/A",
    Production: "Warner Bros. Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Shine",
    Year: "2002",
    Rated: "N/A",
    Released: "01 Oct 2002",
    Runtime: "2 min",
    Genre: "Mystery, Fantasy, Horror",
    Director: "David Uloth",
    Writer: "David Uloth",
    Actors: "Danielle Jade Roy, Chloé Cinq-Mars, Pieter Boon, Alexis Diamond",
    Plot:
      "A comic two-minute fake TV advertisement that mimics domestic cleaning-product commercials, set in the terrifying world of Kubrick's The Shining.",
    Language: "English",
    Country: "Canada",
    Awards: "N/A",
    Poster: "N/A",
    Ratings: [{ Source: "Internet Movie Database", Value: "7.5/10" }],
    Metascore: "N/A",
    imdbRating: "7.5",
    imdbVotes: "42",
    imdbID: "tt0363997",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Joker",
    Year: "2019",
    Rated: "R",
    Released: "04 Oct 2019",
    Runtime: "122 min",
    Genre: "Crime, Drama, Thriller",
    Director: "Todd Phillips",
    Writer:
      "Todd Phillips, Scott Silver, Bob Kane (based on characters created by), Bill Finger (based on characters created by), Jerry Robinson (based on characters created by)",
    Actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
    Plot:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    Language: "English",
    Country: "USA, Canada",
    Awards: "Won 2 Oscars. Another 94 wins & 200 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.5/10" },
      { Source: "Rotten Tomatoes", Value: "68%" },
      { Source: "Metacritic", Value: "59/100" },
    ],
    Metascore: "59",
    imdbRating: "8.5",
    imdbVotes: "827,890",
    imdbID: "tt7286456",
    Type: "movie",
    DVD: "17 Dec 2019",
    BoxOffice: "N/A",
    Production: "Warner Bros. Pictures",
    Website: "N/A",
    Response: "True",
  },
];

const rootReducer = (state = initState, action) => {
  if (action.type === "SEARCH_MOVIE") {
    let moviesSearched = movies.filter((movie) => {
      return movie.Title.includes(action.value);
    });
    return {
      ...state,
      movies: moviesSearched,
    };
  }

  return state;
};

export default rootReducer;
