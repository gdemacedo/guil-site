import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Linkedin, Twitter, GithubCircle } from 'mdi-material-ui';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  palette: {
    primary: grey[900],
    secondary: {
        main: '#f44336',
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleLinkedinButton = event => {
    const url = 'https://www.linkedin.com/in/guilhermedemacedo/';
    window.open(url, '_blank');
  }

  handleTwitterButton = event => {
    const url = 'https://twitter.com/guilmacedo';
    window.open(url, '_blank');
  }

  handleGithubButton = event => {
    const url = 'https://github.com/gdemacedo';
    window.open(url, '_blank');
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>English</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Portuguese</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleLinkedinButton}>
          <IconButton 
            onClick={this.handleLinkedinButton}
            color="inherit">
              <Linkedin />
          </IconButton>
          <p>Linkedin</p>
        </MenuItem>
        <MenuItem onClick={this.handleTwitterButton}>
          <IconButton 
            onClick={this.handleTwitterButton}
            color="inherit">
              <Twitter />
          </IconButton>
          <p>Twitter</p>
        </MenuItem>
        <MenuItem onClick={this.handleGithubButton}>
          <IconButton
            onClick={this.handleGithubButton}
            color="inherit"
          >
            <GithubCircle />
          </IconButton>
          <p>Github</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar >
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Guilherme Macedo
            </Typography>
            <div className={classes.grow} />
            {/* <Typography className={classes.grow} variant="h4" color="inherit" noWrap>
              Guilherme Macedo
            </Typography> */}
            <div className={classes.sectionDesktop}>
              <IconButton 
                onClick={this.handleLinkedinButton}
                color="inherit">
                  <Linkedin />
              </IconButton>
              <IconButton 
                onClick={this.handleTwitterButton}
                color="inherit">
                  <Twitter />
              </IconButton>
              <IconButton
                onClick={this.handleGithubButton}
                color="inherit"
              >
                <GithubCircle />
              </IconButton>
              {/* <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <LanguageIcon />
              </IconButton> */}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);