import React from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';

const RepositoryList = ({ results, filter }) => {
  if (filter.length === 0) {
    return (
      <ul>
        {
          results.map((repo) => (
            <Repository repo={repo} key={`${repo.owner.id}${repo.id}`} />
          ))
        }
      </ul>
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
    <ul>
      {
          filtered.map((repo) => (
            <Repository repo={repo} key={`${repo.owner.id}${repo.id}`} />
          ))
        }
    </ul>
  );
};

RepositoryList.propTypes = {
  results: PropTypes.objectOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default RepositoryList;
