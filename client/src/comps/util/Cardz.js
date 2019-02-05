import {React, Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = theme => ({
  card: {
    display: 'flex',
    height: 150, 
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 600,
  
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

class MediaControlCard extends Component {

  render(){
  const { classes, theme } = this.props;

  
  return (
    <Card className>
      <div className>
        <CardContent className>
          <Typography component="h5" variant="h5">
            {/* {this.props.title} */}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {/* {this.props.artist} */}
          </Typography>
        </CardContent>
        <div className>
          <IconButton aria-label="Previous">
            {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="Play/pause">
            {/* <PlayArrowIcon className={classes.playIcon} /> */}
          </IconButton>
          <IconButton aria-label="Next">
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className
        image=""
        title="Live from space album cover"
      />
    </Card>
  );
}
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);


