import React from 'react';
import PropTypes from 'prop-types';

const Repository = ({ repo }) => (
  <li>
    <div>{repo.name}</div>
    <div>{repo.owner.login}</div>
    <br />
    <br />
  </li>
);

Repository.propTypes = {
  repo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Repository;
