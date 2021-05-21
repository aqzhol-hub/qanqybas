import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {Button, Card, Col, Form} from "react-bootstrap";
import Select from "react-select";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import {getProfile} from "../../api/user";
import {AllPlaces} from "../../api/place";
import {toast} from "react-toastify";
import {AuthContext} from "../../App";
import {FollowPost, PostById, UnFollowPost} from "../../api/post";

import ReactHtmlParser from 'react-html-parser';

const groupedOptions = [
    { value: 'almaty', label: 'almaty' },
    { value: 'astana', label: 'astana' },
    { value: 'taraz', label: 'taraz' }
];

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

// const jwtToken = cookies.jwtToken;
// const response = await getProfile(jwtToken);

export default function PostPage(){
    const { postId } = useParams();
    const {cookies} = useContext(AuthContext);
    const [isAuthor, SetIsAuthor] = useState(false);
    const [isFollower, SetIsFollower] = useState(false);
    const [isRequestUser, SetRequestUser] = useState(false);
    const [thisPost, SetThisPost] = useState([]);

    useEffect(() => {
        const jwtToken = cookies.jwtToken;
        const  res = PostById(jwtToken, postId);

        res.then((result)=>{
            let currentPost = result.data;
            console.log(currentPost);
            SetIsAuthor(currentPost.author);
            SetIsFollower(currentPost.follower);
            SetRequestUser(currentPost.requestUser);
            SetThisPost(currentPost.posts);
        }).catch((err)=>{
            console.log(err);
            // window.history.back();
        });

    }, []);

    const handleFollow = (e) => {
        const jwtToken = cookies.jwtToken;
        const  res = FollowPost(jwtToken, thisPost.id);

        res.then((result)=>{
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
            // window.history.back();
        });
    };

    const handleUnFollow = (e) => {
        const jwtToken = cookies.jwtToken;
        const  res = UnFollowPost(jwtToken, thisPost.id);

        res.then((result)=>{
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
            // window.history.back();
        });
    };

    return (
            <React.Fragment>
                <Card className="mt-5 col-md-6 offset-3">
                    {thisPost && thisPost.places && thisPost.places.name ? <h3 className="text-center mt-3">Location: {thisPost.places.name}</h3> : <tr />}


                    {
                        isAuthor === false && isFollower === false? <Form.Row className="ml-3">
                            {
                                isRequestUser === false ?
                                    <Button variant="success" onClick={handleFollow}>Connect</Button> :
                                    <Button variant="danger" onClick={handleUnFollow}>Disconnect</Button>
                            }
                        </Form.Row> : <tr />
                    }

                    <Card.Body>
                        {thisPost ? <p>Name : {thisPost.name}</p> : <tr />}
                        {thisPost ? <p>Description : {ReactHtmlParser(thisPost.description)}</p> : <tr />}
                        {thisPost ? <p>Visit : {thisPost.visitDate}</p> : <tr />}
                        {thisPost && thisPost.author && thisPost.author.email ? <b>Author : {thisPost.author.email}</b> : <tr />}
                    </Card.Body>
                    {thisPost && thisPost.followers ? <Chips users={thisPost.followers}/> : <tr />}
                </Card>

                {
                    isAuthor === true || isFollower === true ? <Card className="mt-5 col-md-6 offset-3">
                        <h4 className="text-center mt-3">Comments</h4>
                        <Card.Body>
                            <p>Description : </p>
                            <p>Visit : </p>
                        </Card.Body>
                    </Card> : <tr />
                }
            </React.Fragment>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

function Chips({users}) {
    const classes = useStyles();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div className={classes.root}>
            {
                users.length > 0 ? users.map((user, index)=> (
                    <Chip avatar={<Avatar>M</Avatar>} label={user.email} onClick={handleClick}/>
                )) : <tr />
            }

        </div>
    );
}