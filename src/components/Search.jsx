import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Search = ({setResults}) => {

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.length > 0) {
      axios.get(`/api/${query}`)
        .then(({data}) => {
          // todo - consult on formatting
          if (data.total_count > 0) setResults(data.items)
          else setTimeout(function(){alert("Hello")},4000);
        })
        .catch((err => {
          console.log(err)
        }))
    }
  }

  return (
    <>
      <TextField 
        onChange={e => {setQuery(e.target.value)}}
        onKeyDown={(e) => {
          if (e.code === 'Enter') handleSearch()
        }}
        value={query}
        id="outlined-basic search" 
        label="Search" 
        variant="outlined" 
      />
      <Button onClick={handleSearch} variant="contained" color="primary">Go</Button>
    </>
  )
}

export default Search;