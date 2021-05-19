import React, {useEffect, useState} from "react";
import {Button, Image, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { RiEditBoxFill, RiDeleteBack2Fill } from "react-icons/ri";

import DeleteModal from "../DeleteModal";
import CityAddModal from "./CityAddModal";
import {AllCountry} from "../../../api/country";
import {toast} from "react-toastify";
import {AllCity} from "../../../api/city";

export default function CountryTable(){
    const [deleteShow, SetDeleteShow] = useState(false);
    const [addShow, SetAddShow] = useState(false);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const res = AllCity();
        res.then((result)=>{
            console.log(result.data);
            setTableData(result.data);
        }).catch((err)=>{
            toast.error("UnSuccess to load table");
        });
    }, []);

    return (
        <React.Fragment>
            <Button size="lg" variant="primary" onClick={() => SetAddShow(true)}>
                Add City
            </Button>
            <Table className="mt-3" striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th className="text-center">Logo</th>
                    <th className="text-center">Country</th>
                    <th className="text-center">Name</th>
                    <th className="text-center" width={'20%'}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    tableData.map((data, index)=>(
                        <tr key={data.id}>
                            <td className="d-flex justify-content-center">1</td>
                            <td><Image style={{ maxWidth: '90px', width: '60px', height: '60px' }} className="img-fluid rounded mx-auto d-block" src={data.logo} /></td>
                            <td><Image style={{ maxWidth: '150px', width: '120px', height: '60px' }} className="img-fluid rounded mx-auto d-block" src={data.country.logo} /></td>
                            <td className="d-flex justify-content-center mt-3">{data.name}</td>
                            <td>
                                <div className="mt-1 ml-5">
                                    <Link to={`/admin/city/${data.id}`} className="btn btn-primary">
                                        <RiEditBoxFill />
                                    </Link>
                                    <Button variant="danger ml-1" onClick={() => SetDeleteShow(true)}>
                                        <RiDeleteBack2Fill />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                <DeleteModal show={deleteShow} onHide={() => SetDeleteShow(false)}/>
                <CityAddModal show={addShow} onHide={() => SetAddShow(false)}/>
            </Table>
        </React.Fragment>
    )
}
//https://cdn.worldvectorlogo.com/logos/almaty.svg