import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CustomTour from '../tours/CustomTour'
import TopTour from '../tours/TopTours'
import {PlacesByCity} from "../../api/place";
import {toast} from "react-toastify";
import PlaceAddModal from "../admin/place/PlaceAddModal";
import PostAddModal from "../posts/PostAddModal";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);
  const [addShow, SetAddShow] = useState(false);

  useEffect(() => {
    const  res = PlacesByCity();
    res.then((result)=>{
      console.log(result.data);
      setTableData(result.data);
    }).catch((err)=>{
      toast.error("UnSuccess to load table");
    });
  },[]);

  return (
    <React.Fragment>

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Do you want to find like-minded people for outdoor activities? There is a solution
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => SetAddShow(true)}>
                  CREATE POST
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    {/* <ControlledCarousel />*/}

    <Container className={classes.cardGrid} maxWidth="md" spacing = {3}>
      {
        tableData.map((data, index)=>(
            data.places.length ? <CustomTour city={data.city} places={data.places} /> : <tr />
        ))
      }

      <PostAddModal show={addShow} onHide={() => SetAddShow(false)}/>
    </Container>

    </React.Fragment>
  );
}