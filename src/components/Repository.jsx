import React from 'react';

const Repository = ({repo}) => (
  <div>
    <h2>{repo.name}</h2><br/>
    <span>{repo.owner.login}</span><br/><br/>
  </div>
)

export default Repository;