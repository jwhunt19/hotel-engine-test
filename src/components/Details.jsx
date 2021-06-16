import React from 'react';
import {
  Button,
  Grid,
  Link,
  Typography,
  Paper,
  Avatar,
} from '@material-ui/core';
import {
  ArrowBack,
  Code,
  Description,
  StarOutline,
  CallSplit,
  Storage,
  Visibility,
  ArrowForward,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '900px',
    margin: 'auto',
  },
  gridItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  gridInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondary: {
    color: theme.palette.text.secondary,
  },
}));

const Details = () => {
  const classes = useStyles();
  const location = useLocation();
  const { repo } = location.state;

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Grid container alignItems="center" spacing={3}>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={goBack}>
            <ArrowBack />
          </Button>
        </Grid>
        <Grid item>
          <Typography>
            <Link rel="noopener noreferrer" href={repo.owner.html_url} target="_blank">
              {repo.owner.login}
            </Link>
            {' / '}
            <Link rel="noopener noreferrer" href={repo.html_url} target="_blank">
              {repo.name}
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">{repo.name}</Typography>
            <Grid item className={classes.gridInfo}>
              <Typography variant="body2" align="center" className={classes.secondary}>Created by:&nbsp;</Typography>
              <Avatar alt={`${repo.owner.login} avatar`} src={repo.owner.avatar_url} />
              <Typography variant="h5" align="center">
                &nbsp;
                {repo.owner.login}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} className={`${classes.gridItem} ${classes.gridInfo}`}>
            <Code className={classes.secondary} />
            <Typography variant="body2" className={classes.secondary}>Language:&nbsp;</Typography>
            <Typography variant="body1">{repo.language}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <Grid item className={classes.gridInfo}>
              <Description className={classes.secondary} />
              <Typography variant="body2" className={classes.secondary}>Description:&nbsp;</Typography>
            </Grid>
            <Typography variant="body1">{repo.description}</Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={`${classes.gridItem} ${classes.gridInfo}`}>
              <StarOutline className={classes.secondary} />
              <Typography variant="body2" className={classes.secondary}>Stars:&nbsp;</Typography>
              <Typography variant="body1">{repo.stargazers_count}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={`${classes.gridItem} ${classes.gridInfo}`}>
              <CallSplit className={classes.secondary} />
              <Typography variant="body2" className={classes.secondary}>Forks:&nbsp;</Typography>
              <Typography variant="body1">{repo.forks}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={`${classes.gridItem} ${classes.gridInfo}`}>
              <Storage className={classes.secondary} />
              <Typography variant="body2" className={classes.secondary}>Size:&nbsp;</Typography>
              <Typography variant="body1">
                {repo.size}
                {' '}
                KB
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={`${classes.gridItem} ${classes.gridInfo}`}>
              <Visibility className={classes.secondary} />
              <Typography variant="body2" className={classes.secondary}>Watchers:&nbsp;</Typography>
              <Typography variant="body1">{repo.watchers}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} align="center">
            <Button rel="noopener noreferrer" href={repo.html_url} target="_blank" variant="outlined" className={classes.secondary}>
              Visit repository
              <ArrowForward />
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Details;
