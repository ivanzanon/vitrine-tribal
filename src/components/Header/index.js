import React from 'react';
import './style.css';
import { Toolbar, AppBar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    login: {
        marginRigt: theme.spacing(2),
        marginLeft: theme.spacing(2),
        padding: 0,
    }
  }));

const Header = (props) => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h4" color="inherit" noWrap >
                    Vitrine Tribal
                </Typography>
            </Toolbar>
            <Typography variant="h6" color="inherit" noWrap className={classes.login}>
                Login
            </Typography>
        </AppBar>
    );
};

export default Header;