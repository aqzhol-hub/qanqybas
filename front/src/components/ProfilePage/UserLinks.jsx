import React from 'react';
import {Card} from 'react-bootstrap'
import * as goIcon from "react-icons/go";


export default function UserLinks({userLinks}) {
    return (
        <React.Fragment>
            <Card className="mt-3">
                <ul className="list-group list-group-flush">
                    {
                    userLinks.map((link) => {
                        return <li key={link.name} className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <span>{goIcon.GoGlobe}</span>
                                <b><span className="text-secondary">{link.name}</span></b>
                                <span className="text-secondary">{link.address}</span>
                            </li>
                    })}
                </ul>
            </Card>
        </React.Fragment>
    )
}