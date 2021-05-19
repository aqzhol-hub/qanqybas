import axios from "axios";
import {API_URL} from './api'

export async function AllCountry(){
    return axios.get(`${API_URL}/country/all`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function AddCountry(country){
    return axios.post(`${API_URL}/country/add`, country)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}