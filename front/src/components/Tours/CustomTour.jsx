import React, {useEffect, useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AlbumCard from '../cards/AlbumCard'

import { makeStyles } from '@material-ui/core/styles';
import {AllPlaces, PlacesByCity} from "../../api/place";
import {toast, ToastContainer} from "react-toastify";

const useStyles = makeStyles((theme) => ({
    padding: {
        paddingTop: theme.spacing(6),
    }
}));
const cards = [1, 2, 3];

export default function CustomTour({city, places}){
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container className={classes.padding}>
                <Grid item xs={3} sm={2}>
                    <Typography gutterBottom variant="h5" component="h2">
                        <Button variant="outlined" color="primary">
                            {city}
                        </Button>
                    </Typography>
                </Grid>

                <Grid item xs={6} sm={9}></Grid>

                <Grid item xs={3} sm={1}>
                    <Typography gutterBottom variant="h5" component="h2">
                    <Button href="#text-buttons" color="primary">
                        ALL
                    </Button>
                    {/* ICON HERE */}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                {
                    places.map((place, index) => (
                        <AlbumCard key={index} place={place.place} picturesList={place.picturesList} md = {4}/>
                    ))
                }
            </Grid>
        </React.Fragment>
    )
}

