import {Card, Row, Col } from 'react-bootstrap'
import React, {useContext} from 'react';
import {ProfileContext} from './Profile'

function InfoCard({info}){
    return (
        <React.Fragment>
            <Card className="md-3 border-bottom" style={{border: "0"}}>
                <Card.Body>
                    <Row>
                        <Col md={4}><b className="text-secondary text-uppercase">{info.key}</b></Col>
                        <Col md={4} className="text-secondary">{info.value}</Col>
                    </Row>
                </Card.Body>
            </Card>  
        </React.Fragment>
    )
}

const requiredInfo = ["email","firstname", "lastname", "birthDay", "gender"]

export default function UserInfo() {
    const {profile} = useContext(ProfileContext);
    const infoList = Object.keys(profile);
    console.log("infoList ",infoList);

    return (
        <React.Fragment>
            <div className="border border-light">
                {infoList.map((info) => {
                    if(requiredInfo.includes(info)){
                        var key = info;
                        var value = profile[info];
                        if (value === null){
                            value  = " None";
                        }
                        console.log(key, value)
                        return <InfoCard key={key} info={{key:key, value:value}}/>
                    }
                })}
            </div>
        </React.Fragment>
    )
}