import React from 'react';
import {Card} from 'react-bootstrap'

export default function Avatar() {
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <div class="d-flex flex-column align-items-center text-center">
                        <Card.Img src="https://source.unsplash.com/random" className="rounded-circle w-50 h-50"/>
                        <div class="mt-3">
                            <h4>John Doe</h4>
                            <p className="text-secondary mb-1">Full Stack Developer</p>
                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                            <button className="btn btn-primary">Follow</button>
                            <button className="btn btn-outline-primary ml-1">Message</button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}