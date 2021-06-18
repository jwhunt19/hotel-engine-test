import React, { useState } from 'react';
import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
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
    marginTop: '85px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '70vw',
      filter: 'drop-shadow(0 0 0.35rem black)',
    },
  },
  title: {
    padding: '25px',
  },
}));

const App = () => {
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('default');
  const [noResultsOpen, setNoResultsOpen] = useState(false);
  const [emptySearchOpen, setEmptySearchOpen] = useState(false);
  const [tooManyRequests, setTooManyRequests] = useState(false);
  const [unknownError, setUnknownError] = useState(false);

  const classes = useStyles();

  const handleCloseSnackBars = () => {
    setNoResultsOpen(false);
    setEmptySearchOpen(false);
    setTooManyRequests(false);
    setUnknownError(false);
  };

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
                <Search
                  setResults={setResults}
                  sort={sort}
                  setNoResultsOpen={setNoResultsOpen}
                  setEmptySearchOpen={setEmptySearchOpen}
                  setTooManyRequests={setTooManyRequests}
                  setUnknownError={setUnknownError}
                />
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
            <Snackbar
              open={noResultsOpen}
              autoHideDuration={3000}
              onClose={handleCloseSnackBars}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Alert severity="error" onClose={handleCloseSnackBars}>
                No results found
              </Alert>
            </Snackbar>

            <Snackbar
              open={emptySearchOpen}
              autoHideDuration={3000}
              onClose={handleCloseSnackBars}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Alert severity="warning" onClose={handleCloseSnackBars}>
                Please enter text before searching
              </Alert>
            </Snackbar>

            <Snackbar
              open={tooManyRequests}
              autoHideDuration={3000}
              onClose={handleCloseSnackBars}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Alert severity="error" onClose={handleCloseSnackBars}>
                Too many requests!
              </Alert>
            </Snackbar>

            <Snackbar
              open={unknownError}
              autoHideDuration={3000}
              onClose={handleCloseSnackBars}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Alert severity="error" onClose={handleCloseSnackBars}>
                Oops! Something went wrong.
              </Alert>
            </Snackbar>
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
