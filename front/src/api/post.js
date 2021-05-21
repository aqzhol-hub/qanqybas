import axios from "axios";
import {API_URL} from "./api";

export async function AddPost(jwtToken, post){
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };

    return axios.post(`${API_URL}/posts/add`, post, {headers:headers})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function FollowPost(jwtToken, post_id){
    const params = {
        post_id: post_id
    };
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };
    return axios.post(`${API_URL}/posts/follow`, 1,{params:params, headers:headers})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function UnFollowPost(jwtToken, post_id){
    const params = {
        post_id: post_id
    };
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };
    return axios.post(`${API_URL}/posts/unfollow`, 1,{params:params, headers:headers})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function PostById(jwtToken, id){
    const params = {
        id: id
    };
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };
    return axios.get(`${API_URL}/posts/get`, {params:params, headers:headers})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function UserRequestPosts(jwtToken){
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };

    return axios.get(`${API_URL}/posts/requests`, {headers:headers})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}
// get-by-place

export async function FindByPlace(jwtToken, place_id){
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };

    const params = {
        place_id: place_id
    };

    return axios.get(`${API_URL}/posts/get-by-place`, {headers:headers, params:params})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function AcceptFollowPost(jwtToken, post_id, follower_id){
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };

    const params = {
        post_id: post_id,
        follower_id: follower_id
    };

    return axios.post(`${API_URL}/posts/accept-follow` ,1,{headers:headers, params:params})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function DiscardFollowPost(jwtToken,  post_id, follower_id){
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };

    const params = {
        post_id: post_id,
        follower_id: follower_id
    };

    return axios.post(`${API_URL}/posts/discard-follow`, 1,{headers:headers, params:params})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}