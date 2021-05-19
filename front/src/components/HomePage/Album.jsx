import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CustomTour from '../tours/CustomTour'
import TopTour from '../tours/TopTours'
import {PlacesByCity} from "../../api/place";
import {toast} from "react-toastify";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));


export default function Album() {
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);

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
      
    <TopTour />
    {/* <ControlledCarousel /> */}

    <Container className={classes.cardGrid} maxWidth="md" spacing = {3}>
      {
        tableData.map((data, index)=>(
            data.places.length ? <CustomTour city={data.city} places={data.places} /> : <tr />
        ))
      }

    </Container>

    </React.Fragment>
  );
}