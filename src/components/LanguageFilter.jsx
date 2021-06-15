import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const LanguageFilter = ({ setFilter }) => {
  const [filterLang, setFilterLang] = useState('');

  const handleFilter = () => {
    setFilter(filterLang);
  };

  return (
    <>
      <TextField
        onChange={(e) => { setFilterLang(e.target.value); }}
        onKeyDown={(e) => {
          if (e.code === 'Enter') handleFilter();
        }}
        id="outlined-basic"
        label="Language Filter"
        variant="outlined"
      />
      <Button onClick={handleFilter} variant="contained" color="primary">Go</Button>
    </>
  );
};

LanguageFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default LanguageFilter;