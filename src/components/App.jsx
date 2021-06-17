import React, { useState } from 'react';
import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import LanguageFilter from './LanguageFilter';
import RepositoryList from './RepositoryList';
import Sort from './Sort';
import Details from './Details';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: '#FFFFFF',
    maxWidth: '90%',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '870px',
      filter: 'drop-shadow(0 0 0.35rem black)',
    },
  },
}));

const App = () => {
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('default');

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <Grid
              container
              direction="column"
              alignContent="center"
              alignItems="center"
              spacing={3}
              className={classes.app}
            >
              <Grid item>
                <Typography align="center" variant="h2">GitHub Repo Finder</Typography>
              </Grid>
              <Grid item>
                <Search setResults={setResults} sort={sort} />
              </Grid>
              <Grid item>
                <Grid container alignItems="center" justify="center">
                  <Sort sort={sort} setSort={setSort} />
                  <LanguageFilter filter={filter} setFilter={setFilter} results={results} />
                </Grid>
              </Grid>
              <Grid item>
                <RepositoryList results={results} filter={filter} />
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
