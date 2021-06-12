import React from 'react';
import Repository from './Repository.jsx';

const RepositoryList = ({results}) => (
  <div>
    {
      results.map(repo => (
        <Repository repo={repo} key={`${repo.owner.id}${repo.id}`}/>
      ))
    }
  </div>
)

export default RepositoryList;