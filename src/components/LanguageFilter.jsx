import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const LanguageFilter = ({ setFilter }) => {
  const [filterLang, setFilterLang] = useState('');

  const handleFilter = () => {
    setFilter(filterLang);
  };

  return (
    <Grid noWrap>
      <TextField
        onChange={(e) => { setFilterLang(e.target.value); }}
        onKeyDown={(e) => {
          if (e.code === 'Enter') handleFilter();
        }}
        id="outlined-basic"
        label="Language Filter"
        variant="outlined"
        size="small"
      />
      <Button
        onClick={handleFilter}
        variant="contained"
        color="primary"
        style={{ marginLeft: '5px' }}
      >
        Go
      </Button>
    </Grid>
  );
};

LanguageFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default LanguageFilter;
