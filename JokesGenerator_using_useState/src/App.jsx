import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([
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
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setJokes([...jokes,
      {
        id: jokes.length + 1,
        joke: e.target[0].value,
        rate: 0
      }
    ]);
  }

  const updateJoke = (id, rate) => {
    setJokes(jokes.map(joke => {
      if(joke.id === id) {
        return {...joke, rate: rate}
      }
      return joke
    }))
    
  }
  return (
    <div className="container">
      <h2>Joke Generator</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Add Joke" />
        <button type="submit">Add Joke</button>
      </form>

      <div className="Jokes">
        {jokes.map((joke) => {
          return (
            <div key={joke.id} className="joke">
              <div className="joke-text">{joke.joke}</div>
              <div className="joke-rate">{joke.rate}</div>
              <div className="joke-buttons">
                <button onClick={() => updateJoke(joke.id, joke.rate + 1)}>
                  👍
                </button>
                <button onClick={() => updateJoke(joke.id, joke.rate - 1)}>
                  👎
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App
