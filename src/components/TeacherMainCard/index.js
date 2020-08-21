import React from 'react';
import './style.css';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardContent: {
        background: '../../../public/images/julia.jpg',
        backgroundColor: '#FFFFFF',
        maxHeight: '400',
    },
  }));

const TeacherMainCard = (props) => {
    
    const classes = useStyles();
    
    return (
        <div className={classes.cardContent}>
            <Typography >
                Loren ipsin eita porra olha que foda essa parada de fusão tribal das parada tudo olha que loko...
            </Typography>
        </div>
    );
};

export default TeacherMainCard;