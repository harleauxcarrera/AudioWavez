import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Cardz from './Cardz';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 900,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 380,

  },
 
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

function Tracks(props) {
  const { classes } = props;

  return (
    <List className={classes.root} >

      {[0, 1, 2, 3, 4].map(sectionId => (
        <li>
          <ul className={classes.ul}>
              <ListItem>
                <Cardz />
              </ListItem>
          </ul>
        </li>
      ))}

    </List>
  );
}

Tracks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tracks);
