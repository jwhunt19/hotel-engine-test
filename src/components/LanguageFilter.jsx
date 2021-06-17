import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const LanguageFilter = ({ filter, setFilter, results }) => {
  const languages = [...new Set(results.filter((r) => (!!r.language)).map((r) => r.language))];

  return (
    <Grid>
      <FormControl variant="outlined" style={{ width: '150px' }}>
        <InputLabel>Language filter</InputLabel>
        <Select
          value={filter}
          onChange={(e) => { setFilter(e.target.value); }}
          label="Language filter"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            languages.map((language) => (
              <MenuItem value={language} key={language}>{language}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Grid>
  );
};

LanguageFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default LanguageFilter;
