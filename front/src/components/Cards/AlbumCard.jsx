import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default function AlbumCard(props){
    const classes = useStyles();

    const handleClick = () => {
        window.location.replace(`/place/${props.place.id}`);
    }

    const handleClickO = () => {
        window.location.replace(`/postsList/${props.place.id}`);
    }

    return(
        <React.Fragment>
            <Grid item key={props.card} xs={12} sm={6} md={props.md}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={props.picturesList[0].url}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.place.name}
                    </Typography>
                    <Typography>
                        {ReactHtmlParser(props.place.description)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={handleClick}>
                      View
                    </Button>
                  <Button size="small" color="primary" onClick={handleClickO}>
                      POSTS
                  </Button>
                  </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
    )
}