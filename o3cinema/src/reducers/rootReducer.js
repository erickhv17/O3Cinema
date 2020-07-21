const initState = {
  movies: [],
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (action.type === "SEARCH_MOVIE") {
    return {
      ...state,
      movies: action.value,
    };
  }

  return state;
};

export default rootReducer;
