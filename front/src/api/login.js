import axios from "axios";
import {API_URL} from './api'

export async function login(user){
    try {
        const res = await axios.post(`${API_URL}/login`, user);
        return res;
    } catch (err) {
        console.log(err, "erroe");
    }
}

export async function registration(user){
    try {
        const res = await axios.post(`${API_URL}/registration`, user);
        return res;
    } catch (err) {
        console.log(err, "erroe");
    }
}

export async function checkAuth(jwtToken){
    try{
        const headers  = {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/",
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Credentials" : "true",
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            "Authorization": `Bearer ${jwtToken}`
        };
        const res = await axios.get(`${API_URL}/checkAuth`, {headers:headers})
        return res
    }catch (err){
        console.log(err)
    }
}