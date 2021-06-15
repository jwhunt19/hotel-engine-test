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
import Search from './Search';
import LanguageFilter from './LanguageFilter';
import RepositoryList from './RepositoryList';
import Sort from './Sort';
import Details from './Details';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('default');

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
            >
              <Grid item>
                <Typography align="center" variant="h2">GitHub Repo Search</Typography>
              </Grid>
              <Grid item>
                <Search setResults={setResults} sort={sort} />
              </Grid>
              <Grid item>
                <Grid container alignItems="center" justify="center">
                  <Sort sort={sort} setSort={setSort} />
                  <LanguageFilter setFilter={setFilter} />
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
