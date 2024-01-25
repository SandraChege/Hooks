import { useReducer } from "react";
import "./App.css";
import Joke from "./components/Joke";
import jokesReducer from "./reducers/jokesReducer";

function App() {
  const InitialJokes = [
    {
      id: 1,
      joke: "What do you call a very small valentine? A valen-tiny!!!",
      rate: 0,
    },
    {
      id: 2,
      joke: "What did the dog say when he rubbed his tail on the sandpaper? Ruff, Ruff!!!",
      rate: 5,
    },
    {
      id: 3,
      joke: "Why don't sharks like to eat clowns? Because they taste funny!!!",
      rate: 10,
    },
  ];

  const [jokes, dispatch] = useReducer(jokesReducer, InitialJokes);

  const increaseRates = (id) => {
    dispatch({ type: "INCREASE_JOKES_LIKES", id });
  };
  
  const decreaseRates = (id) => {
    dispatch({ type: "DECREASE_JOKES_LIKES", id });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const jokeMsg = e.target[0].value;
    const newJoke = {
      id: jokes.length + 1,
      joke: jokeMsg,
      rate: 0,
    };
    dispatch({ type: "ADD_JOKE", newJoke: newJoke });
  }

  return (
    <div className="container">
      <h2>Jokes For You 😂</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Enter your joke" />
        <button type="submit" className="btn">
          Add Joke
        </button>
      </form>

      <div className="jokes">
        {jokes
          .sort((a, b) => b.id - a.id)
          .map((joke) => (
            <Joke
              key={joke.id}
              joke={joke}
              increaseRates={increaseRates}
              decreaseRates={decreaseRates}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
