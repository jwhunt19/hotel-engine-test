import React, { useState } from 'react'
import Search from './Search'

const App = () => {

  const [results, setResults] = useState([])

  return (
    <div>
      <h1>GitHub Repo Search</h1>
      <Search />
    </div>
  )
}

export default App;