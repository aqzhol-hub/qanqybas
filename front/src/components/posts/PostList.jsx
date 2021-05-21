import React, {useContext, useEffect, useState} from "react";
import {Button, Jumbotron} from 'react-bootstrap'
import { ToastContainer, toast } from "react-toastify";
import PostAddModal from "./PostAddModal";
import {useParams} from "react-router";
import Avatar from "../profilepage/Avatar";
import UserLinks from "../profilepage/UserLinks";
import {AllPlaces} from "../../api/place";
import {FindByPlace, PostById} from "../../api/post";
import {AuthContext} from "../../App";

export default function PostList(){

    const { placeId } = useParams();
    const {cookies} = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        const jwtToken = cookies.jwtToken;
        const  res = FindByPlace(jwtToken, placeId);

        res.then((result)=>{
            let currentPost = result.data;
            setData(currentPost);
            console.log(currentPost);
        }).catch((err)=>{
            console.log(err);
        });

    }, []);

    return (
        <React.Fragment>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

            <div className="col-9 offset-2">
                <div className="list-group mt-5">
                    {
                        data.map((value, index)=>(
                            <a href={"/post/" + value.id} className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{value.name}</h5>
                                    <small>{value.visitDate}</small>
                                </div>
                                {/*<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus*/}
                                {/*    varius blandit.</p>*/}
                                <small>{value.author.email}</small>
                            </a>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}