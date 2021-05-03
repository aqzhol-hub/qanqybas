import React, {useEffect, useContext, useState, createContext} from 'react';
import {Row, Col, Container } from 'react-bootstrap'

import Avatar from './Avatar'
import UserLinks from './UserLinks'
import UserInfo from './UserInfo'
import UserProgress from './UserProgress'

import {AuthContext} from '../../App'
import {getProfile} from '../../api/user'
import { ContactSupportTwoTone } from '@material-ui/icons';

const userLinks = [
    {
        name: "Website1",
        address: "www.website.com",
    },
    {
        name: "Website2",
        address: "www.website.com",
    },
    {
        name: "Website34",
        address: "www.website.com",
    },
    {
        name: "Website4",
        address: "www.website.com",
    },
]


const infoList = [
    {
        key: "Fullname1",
        value: "Aqzhol Baqatay"
    },
    {
        key: "Fullname2",
        value: "Aqzhol Baqatay"
    },
    {
        key: "Fullname3",
        value: "Aqzhol Baqatay"
    },
    {
        key: "Fullname4",
        value: "Aqzhol Baqatay"
    }
]

const progressList = [
    {
        name: "Almaty1",
        now: 45
    },
    {
        name: "Astana2",
        now: 80
    },
    {
        name: "Shymkent3",
        now: 90
    },
    {
        name: "Almaty4",
        now: 100
    },
    {
        name: "Almaty5",
        now: 80
    },
    {
        name: "Almaty6",
        now: 40
    },
]
const progressData = {
    assignment: "Assignment1",
    status: "Status2"
}

// const initProfileData = {
//     "user": {
//         "id": 0,
//         "email":"",
//         "firstname":"",
//         "lastname":"",
//         "roles":[]
//     },
//     "authUser": false
// }

export const ProfileContext = createContext();

export default function UserProfile() {
    const {cookies, isAuth} = useContext(AuthContext);
    const [profile, setProfile] = useState([]);

    async function fetchData() {
        const jwtToken = cookies.jwtToken;
        const response = await getProfile(jwtToken);
        if (response.status===200){
            setProfile(response.data);
        }
    }

    useEffect(async () => {
        fetchData();
    }, []);

    console.log("profile", profile);

    return (
        <React.Fragment>
            <ProfileContext.Provider value={{profile, setProfile}}>
            <Container className="mt-3">
                <Row className="row">
                    <div className="col-md-4 mb-3">
                        <Avatar/>
                        <UserLinks userLinks={[]}/>
                    </div>

                    <Col className="md-8">
                        <UserInfo/>
                        <div className="mt-3">
                            <Row>
                                <UserProgress progressList= {progressList} progressData={progressData} />
                                <UserProgress progressList= {progressList} progressData={progressData} />
                            </Row>
                        </div>       
                    </Col>
                </Row>
            </Container>
            </ProfileContext.Provider>
        </React.Fragment>
    );
}