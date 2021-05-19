import React, {useEffect, useState} from "react";
import {Button, Image, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { RiEditBoxFill, RiDeleteBack2Fill } from "react-icons/ri";
import CountryAddModal from "./CountryAddModal";
import DeleteModal from "../DeleteModal";
import {AllCountry} from "../../../api/country";
import { ToastContainer, toast } from "react-toastify";

export default function CountryTable(){
    const [deleteShow, SetDeleteShow] = useState(false);
    const [addShow, SetAddShow] = useState(false);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const res = AllCountry();
        res.then((result)=>{
            console.log(result.data);
            setTableData(result.data);
        }).catch((err)=>{
            toast.error("UnSuccess to load table");
        });
    }, []);

    return (
        <React.Fragment>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Button size="lg" variant="primary" onClick={() => SetAddShow(true)}>
                Add Country
            </Button>
            <Table className="mt-3" striped bordered hover>
                <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Flag</th>
                    <th className="text-center">Name</th>
                    <th className="text-center" width={'20%'}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    tableData.map((data, index)=>(
                        <tr>
                            <td className="d-flex justify-content-center">{data.id}</td>
                            <td><Image style={{ maxWidth: '150px', width: '120px', height: '60px' }}  className="img-fluid rounded mx-auto d-block" src={data.logo} /></td>
                            <td className="d-flex justify-content-center mt-3">{data.name}</td>
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
                    ))
                }
                </tbody>
                <DeleteModal show={deleteShow} onHide={() => SetDeleteShow(false)}/>
                <CountryAddModal show={addShow} onHide={() => SetAddShow(false)}/>
            </Table>
        </React.Fragment>
    )
}