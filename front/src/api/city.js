import axios from "axios";
import {API_URL} from './api'

export async function preAddCity(){
    return axios.get(`${API_URL}/country/all`)
        .then(res => {
            return res.data;
        });
}

export async function AddCity(city){
    return axios.post(`${API_URL}/city/add`, city)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function AllCity(){
    return axios.get(`${API_URL}/city/all`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}
