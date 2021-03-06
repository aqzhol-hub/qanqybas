import React from 'react';
import {Card, Col, ProgressBar} from 'react-bootstrap'

export default function UserProgress({progressList, progressData}) {
    return (
        <React.Fragment>
            <Col md={6}>
                <Card className="h-100">
                    <Card.Body>
                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">{progressData.assignment}</i>{progressData.status}</h6>
                        {progressList.map((progress) => {
                         return <div key={progress.name}>
                             <small>{progress.name}</small>
                             <ProgressBar now={progress.now} label={progress.now}/>
                         </div>
                        })}
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    )
}