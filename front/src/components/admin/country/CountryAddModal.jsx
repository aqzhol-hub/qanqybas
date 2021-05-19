import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {AddPlace} from "../../../api/place";
import {toast} from "react-toastify";
import {AddCountry} from "../../../api/country";

const initData = {logo: "", name:""};
export default function CountryAddModal(props) {
    const [data, setData] = useState(initData);

    const handleChangeData = (e) => {
        const {name, value} = e.target;
        setData(prev => ({...prev, [name]: value}));
    };

    const handleSubmitData = (e) => {
        const res = AddCountry(data);
        res.then((result)=>{
            if(result.status===200) {
                toast.success("Success");
                setData(initData);
                props.onHide();
            }
        }).catch((err)=>{
            toast.error("UnSuccess");
        });
    };

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Country
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="col-md-9 offset-2">
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Flag</Form.Label>
                        <Form.Control onChange={handleChangeData} value={data.logo} name="logo" type="url"/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={handleChangeData} value={data.name} name="name" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSubmitData}>Save</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
