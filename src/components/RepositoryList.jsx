import React from 'react';
import Repository from './Repository.jsx';

const RepositoryList = ({results}) => {
  return (
    <ul>
      {
        results.map(repo => (
          <Repository repo={repo} key={`${repo.owner.id}${repo.id}`}/>
        ))
      }
    </ul>
  )
}

export default RepositoryList;