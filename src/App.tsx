import React, { useState } from 'react';
import './App.css';

function App() {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setResults(true)
    console.log(search)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <input type='text' placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} name="search"/>
          <button>search</button>
        </form>

        { results? <h3>{search} not found</h3> : null}
      </header>
    </div>
  );
}

export default App;
