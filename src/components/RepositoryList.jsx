import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Repository from './Repository';

const RepositoryList = ({ results, filter }) => {
  if (filter.length === 0) {
    return (
      <List>
        {
            results.map((repo) => (
              <Repository repo={repo} key={`${repo.owner.id}${repo.id}`} />
            ))
          }
      </List>
    );
  }
  const filtered = [];

  results.forEach((result) => {
    if (result.language) {
      if (result.language.toLowerCase() === filter.toLowerCase()) {
        filtered.push(result);
      }
    }
  });

  return (
    <List>
      {
          filtered.map((repo) => (
            <Repository repo={repo} key={`${repo.owner.id}${repo.id}`} />
          ))
        }
    </List>
  );
};

RepositoryList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default RepositoryList;
