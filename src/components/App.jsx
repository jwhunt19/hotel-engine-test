import React, { useState } from 'react';
import Search from './Search';
import LanguageFilter from './LanguageFilter';
import RepositoryList from './RepositoryList';

const App = () => {
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');

  return (
    <div>
      <h1>GitHub Repo Search</h1>
      <Search setResults={setResults} />
      <LanguageFilter setFilter={setFilter} />
      <RepositoryList results={results} filter={filter} />
    </div>
  );
};

export default App;
