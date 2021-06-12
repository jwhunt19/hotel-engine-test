import React, { useState } from 'react'
import Search from './Search'
import RepositoryList from './RepositoryList'

const App = () => {

  const [results, setResults] = useState([])

  const test = () => {
    console.log(results)
  }

  return (
    <div>
      <h1>GitHub Repo Search</h1>
      <Search setResults={setResults}/>
      <button onClick={test}>test</button>
      <RepositoryList results={results} />
    </div>
  )
}

export default App;