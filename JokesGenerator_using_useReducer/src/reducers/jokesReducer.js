const jokesReducer = (jokes, action) => {
  switch (action.type) {
    case "ADD_JOKE":
      return [...jokes, action.newJoke];

    case "INCREASE_JOKES_LIKES":
      return jokes.map((joke) => {
        if (joke.id == action.id) {
          return { ...joke, rate: joke.rate + 1 };
        } else {
          return joke;
        }
      });
    case "DECREASE_JOKES_LIKES":
      return jokes.map((joke) => {
        if (joke.id == action.id) {
          return { ...joke, rate: joke.rate - 1 };
        } else {
          return joke;
        }
      });
    default:
      return jokes;
  }
};
export default jokesReducer;
