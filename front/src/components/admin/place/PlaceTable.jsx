import React, {useState} from "react";
import {Button, Image, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { RiEditBoxFill, RiDeleteBack2Fill } from "react-icons/ri";
// import CountryAddModal from "./CountryAddModal";
import DeleteModal from "../DeleteModal";
import PlaceAddModal from "./PlaceAddModal";

export default function PlaceTable(){
    const [deleteShow, SetDeleteShow] = useState(false);
    const [addShow, SetAddShow] = useState(false);

    return (
        <React.Fragment>
            <Button size="lg" variant="primary" onClick={() => SetAddShow(true)}>
                Add Places
            </Button>
            <Table className="mt-3" striped bordered hover>
                <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Rating</th>
                    <th className="text-center">City</th>
                    <th className="text-center" width={'20%'}>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Kolsay</td>
                    <td>3.5</td>
                    <td>Almaty</td>
                    <td>
                        <div className="mt-1 ml-5">
                            <Link to={`/admin/places/1`} className="btn btn-primary">
                                <RiEditBoxFill />
                            </Link>
                            <Button variant="danger ml-1" onClick={() => SetDeleteShow(true)}>
                                <RiDeleteBack2Fill />
                            </Button>
                        </div>
                    </td>
                </tr>
                </tbody>
                <DeleteModal show={deleteShow} onHide={() => SetDeleteShow(false)}/>
                <PlaceAddModal show={addShow} onHide={() => SetAddShow(false)}/>
            </Table>
        </React.Fragment>
    )
}