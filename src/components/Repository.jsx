import React from 'react';

const Repository = ({repo}) => (
  <li>
    <div>{repo.name}</div>
    <div>{repo.owner.login}</div><br/><br/>
  </li>
)

export default Repository;