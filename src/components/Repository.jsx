import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Divider,
} from '@material-ui/core';

const Repository = ({ repo }) => (
  <>
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={`${repo.owner.login} avatar`} src={repo.owner.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        primary={repo.name}
        secondary={(
          <>
            <Typography
              component="span"
              variant="body2"
              color="textPrimary"
            >
              Author:
              {' '}
            </Typography>
            {repo.owner.login}
          </>
            )}
      />
    </ListItem>
    <Divider variant="inset" component="li" />
  </>
);

Repository.propTypes = {
  repo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Repository;
