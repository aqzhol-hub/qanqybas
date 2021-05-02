import React from 'react';
import {Card, Row, Col } from 'react-bootstrap'

function InfoCard({info}){
    return (
        <React.Fragment>
            <Card className="md-3 border-bottom" style={{border: "0"}}>
                <Card.Body>
                    <Row>
                        <Col md={4}><b className="text-secondary">{info.key}</b></Col>
                        <Col md={4} className="text-secondary">{info.value}</Col>
                    </Row>
                </Card.Body>
            </Card>  
        </React.Fragment>
    )
}

export default function UserInfo({infoList}) {
    return (
        <React.Fragment>
            <div className="border border-light">
                {infoList.map((info) => {
                    return <InfoCard info={info}/>
                })}
            </div>
        </React.Fragment>
    )
}