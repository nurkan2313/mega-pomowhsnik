import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing(20),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '45%'
  },
}));

function _handleClick(props) {
  const { history: { goBack, length, push } } = props;
  length < 4 ? push('/') : goBack();
};

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <div className={classes.search}>
      <AppBar position="static" c>
        <Toolbar >
              <ArrowBack onClick={() => _handleClick(props)}/>
              <div className={classes.searchIcon}>
                <Link to="/" className='main-link'> Мега помошник </Link>
              </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
}

export default withRouter(Header);