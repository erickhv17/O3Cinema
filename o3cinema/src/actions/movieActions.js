import axios from "axios";
export const searchMovie = (value) => {
  return {
    type: "SEARCH_MOVIE",
    value,
  };
};

export const fetchMovie = (value) => {
  return (dispatch) => {
    axios
      .get("http://www.omdbapi.com/?t=" + value + "&apikey=32efe8c2")
      .then((response) => {
        //is because movies is an array
        let finalResponse = Array.isArray(response.data)
          ? response.data
          : [response.data];
        dispatch(searchMovie(finalResponse));
      })
      .catch((error) => {});
  };
};
