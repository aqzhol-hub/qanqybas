import {Card} from 'react-bootstrap'
import React, {useContext} from 'react';
import {ProfileContext} from './Profile'

export default function Avatar() {
    const {profile} = useContext(ProfileContext);

    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <div className="d-flex flex-column align-items-center text-center">
                        <Card.Img src="https://source.unsplash.com/random" className="rounded-circle w-50 h-50"/>
                        <div className="mt-3">
                            <h4>{profile.firstname} {profile.lastname}</h4>
                            <p className="text-secondary mb-1">Full Stack Developer</p>
                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                            <button className="btn btn-block btn-primary mt-3">Follow</button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}