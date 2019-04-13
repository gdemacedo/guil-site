import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from './LayoutBody';
import Typography from './Typography';
import ReactLogo from '../images/react_logo.jpg'
import JSLogo from '../images/js_logo.png'
import NodeJSLogo from '../images/nodejs_logo4.png'
import CurvyLines from '../images/productCurvyLines.png'

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'white',
    
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 30,
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * 0.5,
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function Values(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src={CurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={JSLogo}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                JavaScript
              </Typography>
              <Typography variant="h5">
                My current passion is to build business applications using JavaScript and its main libraries
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={ReactLogo}
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                React
              </Typography>
              <Typography variant="h5">
                Building React Applications is not only efficient but a very enjoyable process.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={NodeJSLogo}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Node.js
              </Typography>
              <Typography variant="h5">
                Node.js was what really got my attention and made me direct my career to JavaScript.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

Values.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Values);
