import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CustomTour from '../tours/CustomTour'
import TopTour from '../tours/TopTours'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      
    <TopTour />
    {/* <ControlledCarousel /> */}

    <Container className={classes.cardGrid} maxWidth="md" spacing = {3}>
        <CustomTour />
    </Container>

    </React.Fragment>
  );
}