import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  TextField,
  Button,
  Snackbar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Search = ({ setResults }) => {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');
  const [noResultsOpen, setNoResultsOpen] = useState(false);
  const [emptySearchOpen, setEmptySearchOpen] = useState(false);

  const handleSearch = () => {
    if (query.length > 0) {
      axios.get(`/api/${query}/${sort}`)
        .then(({ data }) => {
          if (data.total_count > 0) {
            setResults(data.items);
          } else {
            setNoResultsOpen(true);
          }
        })
        .catch(((err) => {
          console.log(err);
        }));
    } else {
      setEmptySearchOpen(true);
    }
  };

  useEffect(() => {
    if (query.length > 0) handleSearch();
  }, [sort]);

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleCloseAll = () => {
    setNoResultsOpen(false);
    setEmptySearchOpen(false);
  };

  return (
    <>
      <TextField
        onChange={(e) => { setQuery(e.target.value); }}
        onKeyDown={(e) => {
          if (e.code === 'Enter') handleSearch();
        }}
        value={query}
        id="outlined-basic search"
        label="Search"
        variant="outlined"
      />

      <Button onClick={handleSearch} variant="contained" color="primary">Go</Button>

      <Snackbar open={noResultsOpen} autoHideDuration={5000} onClose={handleCloseAll}>
        <Alert severity="error" onClose={handleCloseAll}>
          No results found
        </Alert>
      </Snackbar>

      <Snackbar open={emptySearchOpen} autoHideDuration={5000} onClose={handleCloseAll}>
        <Alert severity="warning" onClose={handleCloseAll}>
          Please enter text before searching
        </Alert>
      </Snackbar>

      <FormControl component="fieldset">
        <FormLabel component="legend">Sort by:</FormLabel>
        <RadioGroup aria-label="sortBy" name="sortBy" value={sort} onChange={handleSort}>
          <FormControlLabel value="default" control={<Radio />} label="Best Match" />
          <FormControlLabel value="stars" control={<Radio />} label="Stars" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

Search.propTypes = {
  setResults: PropTypes.func.isRequired,
};

export default Search;
