import axios from "axios";
import {API_URL} from './api'

export async function preAddPlace(){
    return axios.get(`${API_URL}/place/pre/add`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
}

export async function AddPlace(place){
    return axios.post(`${API_URL}/place/add`, place)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function AllPlaces(){
    return axios.get(`${API_URL}/place/all`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}

export async function PlacesByCity(){
    return axios.get(`${API_URL}/place/by-city`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}
//PlacesById
export async function PlacesById(id){
    const params = {
        id: id
    };
    return axios.get(`${API_URL}/place/get`, { params })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log("err", err);
        });
}