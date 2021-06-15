import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import axios from 'axios';
import { TextField, Button, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Search = ({ setResults, sort }) => {
  const [query, setQuery] = useState('');
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
          console.error(err);
        }));
    } else {
      setEmptySearchOpen(true);
    }
  };

  useEffect(() => {
    if (query.length > 0) handleSearch();
  }, [sort]);

  const handleCloseAll = () => {
    setNoResultsOpen(false);
    setEmptySearchOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignContent="center"
        alignItems="center"
        spacing="2"
      >
        <Grid container>
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
          <Button
            onClick={handleSearch}
            variant="contained"
            color="primary"
            style={{ marginLeft: '5px' }}
          >
            Go
          </Button>
        </Grid>

      </Grid>

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
    </>
  );
};

Search.propTypes = {
  setResults: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

export default Search;
