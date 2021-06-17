import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import Spinner from 'react-bootstrap/Spinner';

const Search = ({
  setResults, sort, setNoResultsOpen, setEmptySearchOpen, setTooManyRequests, setUnknownError,
}) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (query.length > 0) {
      setLoading(true);
      axios.get(`/api/${query}/${sort}`)
        .then(({ data }) => {
          if (data.total_count > 0) {
            setResults(data.items);
            setLoading(false);
          } else {
            setNoResultsOpen(true);
            setLoading(false);
          }
        })
        .catch(((err) => {
          console.error(err);
          if (err.response.status === 403 || err.response.status === 429) {
            setTooManyRequests(true);
          } else {
            setUnknownError(true);
          }
          setLoading(false);
        }));
    } else {
      setEmptySearchOpen(true);
    }
  };

  useEffect(() => {
    if (query.length > 0) handleSearch();
  }, [sort]);

  return (
    <>
      {
        loading
          ? <Spinner animation="border" />
          : (
            <Grid
              container
              direction="row"
              alignContent="center"
              alignItems="center"
              spacing={2}
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
          )
      }
    </>
  );
};

Search.propTypes = {
  setResults: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  setNoResultsOpen: PropTypes.func.isRequired,
  setEmptySearchOpen: PropTypes.func.isRequired,
  setTooManyRequests: PropTypes.func.isRequired,
  setUnknownError: PropTypes.func.isRequired,
};

export default Search;
