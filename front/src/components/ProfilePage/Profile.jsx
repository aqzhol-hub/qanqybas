import React from 'react';
import {Row, Col, Container } from 'react-bootstrap'

import Avatar from './Avatar'
import UserLinks from './UserLinks'
import UserInfo from './UserInfo'
import UserProgress from './UserProgress'

// import * as goIcon from "react-icons/go";


const userLinks = [
    {
        name: "Website",
        address: "www.website.com",
    },
    {
        name: "Website",
        address: "www.website.com",
    },
    {
        name: "Website",
        address: "www.website.com",
    },
    {
        name: "Website",
        address: "www.website.com",
    },
]


const infoList = [
    {
        key: "Fullname",
        value: "Aqzhol Baqatay"
    },
    {
        key: "Fullname",
        value: "Aqzhol Baqatay"
    },
    {
        key: "Fullname",
        value: "Aqzhol Baqatay"
    },
    {
        key: "Fullname",
        value: "Aqzhol Baqatay"
    }
]

const progressList = [
    {
        name: "Almaty",
        now: 45
    },
    {
        name: "Astana",
        now: 80
    },
    {
        name: "Shymkent",
        now: 90
    },
    {
        name: "Almaty",
        now: 100
    },
    {
        name: "Almaty",
        now: 80
    },
    {
        name: "Almaty",
        now: 40
    },
]
const progressData = {
    assignment: "Assignment",
    status: "Status"
}



export default function UserProfile() {

  return (
    <React.Fragment>
        <Container className="mt-3">
            
            <Row className="row">
                <div className="col-md-4 mb-3">
                    <Avatar />
                    <UserLinks userLinks={userLinks}/>
                </div>

                <Col className="md-8">
                    <UserInfo infoList={infoList}/>

                    <div className="mt-3">
                        <Row>
                            <UserProgress progressList= {progressList} progressData={progressData} />
                            <UserProgress progressList= {progressList} progressData={progressData} />
                        </Row>
                    </div>       

                </Col>
            </Row>
        </Container>
    </React.Fragment>
  );
}