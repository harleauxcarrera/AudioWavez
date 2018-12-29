import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const styles = {
  avatar: {
    margin: 10,
    diplay: 'inline'
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
   
      <Avatar  src={props.fuck} className={classes.avatar} />
     
   
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);