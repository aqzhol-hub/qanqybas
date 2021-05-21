import axios from "axios";
import {API_URL} from './api'

export function getProfile(jwtToken){
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };
    return axios.get(`${API_URL}/user/profile`, {headers:headers})
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log(err);
    });
}

export function getRoles(jwtToken){
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${jwtToken}`
    };
    return axios.get(`${API_URL}/user/get-roles`, {headers:headers})
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

// get-roles