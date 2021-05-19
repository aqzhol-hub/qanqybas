import React, {useEffect, useState} from "react";
import {Button, Image, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { RiEditBoxFill, RiDeleteBack2Fill } from "react-icons/ri";
import DeleteModal from "../DeleteModal";
import PlaceAddModal from "./PlaceAddModal";
import {AllPlaces} from '../../../api/place'
import { ToastContainer, toast } from "react-toastify";


export default function PlaceTable(){
    const [tableData, setTableData] = useState([]);
    const [deleteShow, SetDeleteShow] = useState(false);
    const [addShow, SetAddShow] = useState(false);

    useEffect(() => {
        const  res = AllPlaces();
        res.then((result)=>{
            console.log(result.data);
            setTableData(result.data);
        }).catch((err)=>{
            toast.error("UnSuccess to load table");
        });
        },[]);

    return (
        <React.Fragment>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
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

                {
                    tableData.map((data, index)=>(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.rating}</td>
                            <td>{data.city.name}</td>
                            <td>
                                <div className="mt-1 ml-5">
                                    <Link to={`/admin/places/${data.id}`} className="btn btn-primary">
                                        <RiEditBoxFill />
                                    </Link>
                                    <Button variant="danger ml-1" onClick={() => SetDeleteShow(true)}>
                                        <RiDeleteBack2Fill key={data.id}/>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
                <DeleteModal show={deleteShow} onHide={() => SetDeleteShow(false)}/>
                <PlaceAddModal show={addShow} onHide={() => SetAddShow(false)}/>
            </Table>
        </React.Fragment>
    )
}