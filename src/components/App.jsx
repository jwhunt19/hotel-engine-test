import React, { useState } from 'react'
import Search from './Search'
import LanguageFilter from './LanguageFilter'
import RepositoryList from './RepositoryList'

const App = () => {

  const [results, setResults] = useState([])
  const [filter, setFilter] = useState('')

  const test = () => {
    console.log(results)
    console.log(filter)
  }

  return (
    <div>
      <h1>GitHub Repo Search</h1>
      <Search setResults={setResults}/>
      <button onClick={test}>test</button>
      <LanguageFilter setFilter={setFilter}/>
      <RepositoryList results={results} filter={filter} />
    </div>
  )
}

export default App;