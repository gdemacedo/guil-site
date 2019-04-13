import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  palette: {
    primary: grey[900],
    secondary: {
        main: '#f44336',
    },
  },
  root: {
    display: 'flex',
    boxShadow: 'none',
    bottom:0,
    position: 'fixed',
    width: '100%',
    height: theme.spacing.unit * 15,
    backgroundColor: '#F6F6F6',
    justifyContent: 'space-between',
  },
  tabs: {
    fontFamily: 'Arial',
    fontSize: '16px',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',    
    alignItems: 'center',
  },
});

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Typography component="div" className={classes.tabs} >
        © 2019, Guilherme Macedo
        </Typography>
        <div className={classes.tabs}>
          <a 
            href="https://twitter.com/guilmacedo?ref_src=twsrc%5Etfw" 
            class="twitter-follow-button" 
            data-show-count="false">
              Follow @guilmacedo
          </a>
        </div>
        {/* <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
          centered
        >
          <Tab label="Software Development" className={classes.tabs} />
          <Tab label="Hobbies" />
        </Tabs> */}
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);