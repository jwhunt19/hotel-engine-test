import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Search = () => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState()

  // axios.get(`https://api.github.com/search/repositories?q=${query}`)

  const handleSearch = () => {
    if (query.length > 0) {
      axios.get(`https://api.github.com/search/repositories?q=${query}`)
        .then(({data}) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <>
      <TextField 
        onChange={e => {setQuery(e.target.value)}}
        value={query}
        id="outlined-basic" 
        label="Search" 
        variant="outlined" 
      />
      <Button onClick={handleSearch} variant="contained" color="primary">Go</Button>
    </>
  )
}

export default Search;