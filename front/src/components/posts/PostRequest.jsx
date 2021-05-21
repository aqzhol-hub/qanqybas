import React, {useContext, useEffect, useState} from "react";
import {Button, Image, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {RiCloseCircleLine, RiCheckboxCircleLine} from "react-icons/ri";
import {AcceptFollowPost, DiscardFollowPost, PostById, UserRequestPosts} from "../../api/post";
import {AuthContext} from "../../App";




export default function PostRequest(){
    const {cookies} = useContext(AuthContext);
    const [posts, SetPosts] = useState([]);
    const [userRequest, setUserRequest] = useState({followerId:"", postId:""});

    useEffect(() => {
        const jwtToken = cookies.jwtToken;
        const  res = UserRequestPosts(jwtToken);

        res.then((result)=>{
            SetPosts(result.data);
            console.log(result.data);
        }).catch((err)=>{
            console.log(err, "error");
        });
        // UserRequestPosts
    },[]);

    function acceptRequest(followerId, postId){
        setUserRequest({followerId: followerId, postId:postId});
        console.log(userRequest);
        const jwtToken = cookies.jwtToken;
        const  res = AcceptFollowPost(jwtToken, postId, followerId);

        res.then((result)=>{
            // window.location.reload();
        }).catch((err)=>{
            console.log(err, "error");
        });
    }

    function discardRequest(followerId, postId){
        setUserRequest({followerId: followerId, postId:postId});
        const jwtToken = cookies.jwtToken;
        const  res = DiscardFollowPost(jwtToken, postId, followerId);

        res.then((result)=>{
            // window.location.reload();
        }).catch((err)=>{
            console.log(err, "error");
        });
    }

    return (
        <React.Fragment>
            <Table className="mt-3 col-9 offset-2" striped bordered hover>
                <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Full Name</th>
                    <th className="text-center">Post</th>
                    <th className="text-center" width={'20%'}>Actions</th>
                </tr>
                </thead>
                <tbody>

                {
                    posts.map((value, index)=>(
                        <tr>
                            <td>{value.users.id}</td>
                            <td>{value.users.email}</td>
                            <td>{value.posts.name}</td>
                            <td>
                                <div className="mt-1 ml-5">
                                    <Button lassName="btn btn-primary" onClick={e=>acceptRequest(value.users.id, value.posts.id)}>
                                        <RiCheckboxCircleLine />
                                    </Button>
                                    <Button variant="danger ml-1" onClick={e=>discardRequest(value.users.id, value.posts.id)}>
                                        <RiCloseCircleLine/>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </Table>
        </React.Fragment>
    )
}