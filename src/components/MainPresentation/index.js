import React from 'react';
import './style.css';
import { Container, Typography, makeStyles, Grid } from '@material-ui/core';
import TeacherMainCard from '../TeacherMainCard'

const useStyles = makeStyles((theme) => ({
    mainContent: {
        background: theme.palette.background.main,
        padding: theme.spacing(8, 0),
        height: theme.spacing(100)
    },
    mainMessage: {
        alignContent: 'center',
        maxWidth: '50%',
    },
    cards: {
        width: 50,
        padding: theme.spacing(8, 0),
    },
    rootGrid: {
        flexGrow: 1,
        padding: 0
    }
  }));

const MainPresentation = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.mainContent}>

            <Container maxWidth="lg" color="primary" className={classes.mainMessage}>
                <Typography >
                    oren ipsin eita porra olha que foda essa parada de fusão tribal das parada tudo olha que loko...
                </Typography>
            </Container>

            <Grid container direction="row" alignItems="center" className={classes.rootGrid} spacing={2}>
                <Grid item xs={6}>
                    <TeacherMainCard className={classes.cards}/>
                </Grid>
                <Grid item xs={6}>
                    <TeacherMainCard className={classes.cards}/>
                </Grid>
            </Grid>

        </div>
    );
};

export default MainPresentation;