import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const Sort = ({ sort, setSort }) => {
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Sort by:</FormLabel>
      <RadioGroup aria-label="sortBy" name="sortBy" value={sort} onChange={handleSort} style={{ display: 'flex' }} row>
        <FormControlLabel value="default" control={<Radio />} label="Best Match" />
        <FormControlLabel value="stars" control={<Radio />} label="Stars" />
      </RadioGroup>
    </FormControl>

  );
};

Sort.propTypes = {
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default Sort;
