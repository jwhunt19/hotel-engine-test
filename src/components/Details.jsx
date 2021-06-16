import React from 'react';
import {
  Button, Grid,
  GridItem, Link, Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { repo } = location.state;

  const goBack = () => {
    window.history.back();
  };

  return (
    <Grid container alignItems="center">
      <Button variant="outlined" color="primary" onClick={goBack}>
        <ArrowBackIcon />
      </Button>
      <Typography style={{ marginLeft: '5px' }}>
        <Link rel="noopener noreferrer" href={repo.owner.html_url} target="_blank">
          {repo.owner.login}
        </Link>
        {' / '}
        <Link rel="noopener noreferrer" href={repo.html_url} target="_blank">
          {repo.name}
        </Link>
      </Typography>
    </Grid>
  );
};
export default Details;
