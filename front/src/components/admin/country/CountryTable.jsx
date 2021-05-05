import React, {useState} from "react";
import {Button, Image, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { RiEditBoxFill, RiDeleteBack2Fill } from "react-icons/ri";
import CountryAddModal from "./CountryAddModal";
import DeleteModal from "../DeleteModal";

export default function CountryTable(){
    const [deleteShow, SetDeleteShow] = useState(false);
    const [addShow, SetAddShow] = useState(false);

    return (
        <React.Fragment>
            <Button size="lg" variant="primary" onClick={() => SetAddShow(true)}>
                Add Country
            </Button>
            <Table className="mt-3" striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Flag</th>
                    <th>Name</th>
                    <th width={'20%'}>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="d-flex justify-content-center">1</td>
                    <td><Image className="img-fluid rounded mx-auto d-block" src="https://www.worldometers.info/img/flags/small/tn_kz-flag.gif" /></td>
                    <td className="d-flex justify-content-center mt-3">Qazastan</td>
                    <td>
                        <div className="mt-1 ml-5">
                            <Link to={`/admin/country/1`} className="btn btn-primary">
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
                <CountryAddModal show={addShow} onHide={() => SetAddShow(false)}/>
            </Table>
        </React.Fragment>
    )
}