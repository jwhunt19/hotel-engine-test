import React from 'react';
import Repository from './Repository.jsx';

const RepositoryList = ({results, filter}) => {
 if (filter.length === 0) {
    return (
      <ul>
        {
          results.map(repo => (
            <Repository repo={repo} key={`${repo.owner.id}${repo.id}`}/>
          ))
        }
      </ul>
    )
  } else {
    const filtered = [];

    results.forEach((result) => {
      if (result.language) {
        if (result.language.toLowerCase() === filter.toLowerCase()) {
          filtered.push(result)
          console.log(result.language.toLowerCase, filter.toLowerCase)
        }
      }
    })

    return (
      <ul>
        {
          filtered.map(repo => (
            <Repository repo={repo} key={`${repo.owner.id}${repo.id}`}/>
          ))
        }
      </ul>
    )
  }

}

export default RepositoryList;