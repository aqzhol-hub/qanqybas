import {Button, Col, Form, Modal} from "react-bootstrap";
import React, {useState, useEffect, useContext} from "react";

import Select from 'react-select';
import { ToastContainer, toast } from "react-toastify";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {AllPlaces} from "../../api/place";
import {AddPost} from "../../api/post";
import {AuthContext} from "../../App";

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const initData = {name: "", description: "", visitDate: "", placeId: ""}

export default function PostAddModal(props) {
    const [startDate, setStartDate] = useState(new Date());

    // eslint-disable-next-line no-unused-vars
    const [cityOptions, setCityOptions] = useState([]);
    const [data, setData] = useState(initData);
    const {cookies} = useContext(AuthContext);

    const handleChangeData = (e) => {
        const {name, value} = e.target;
        setData(prev => ({...prev, [name]: value}));

        let month = (startDate.getMonth()+1);
        if (month.toString().length === 1){
            month = "0" + month.toString()
        }

        const dateString = startDate.getFullYear() + "-" + month + "-" + startDate.getDate();
        setData(prev => ({...prev, "visitDate": dateString}));
    };

    const handleChangeCity = (selectedOption) => {
        setData(prev => ({...prev, "placeId": selectedOption.id}));
    };

    const handleSubmit = (e) => {
        console.log(data);
        const jwtToken = cookies.jwtToken;
        const  res = AddPost(jwtToken, data);
        res.then((result)=>{
            console.log(result.data);
            window.location.replace(`/post/${result.data.id}`);
            toast.success("Success");
        }).catch((err)=>{
            toast.error("UnSuccess");
        });
    }

    useEffect(() => {
        const  res = AllPlaces();
        res.then((result)=>{
            console.log(result.data);

            for (let i = 0; i < result.data.length; i++) {
                cityOptions.push({
                    value: result.data[i].name,
                    label: result.data[i].name,
                    id: result.data[i].id
                });
            }
            setCityOptions(cityOptions);

        }).catch((err)=>{
            toast.error("UnSuccess to load");
        });
    }, []);

    return (
        <Modal {...props} size="lg" centered>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Posts
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="col-md-9 offset-2">
                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required name="name" value={data.name} onChange={handleChangeData} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={data.description}
                            onReady={ editor => {
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setData(prev => ({...prev,"description": data}))
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group md={8} as={Col} controlId="exampleForm.ControlSelect1">
                            <Form.Label>Choose Place</Form.Label>
                            <Select
                                required
                                name="cityId"
                                onChange={handleChangeCity}
                                options={cityOptions}
                                formatGroupLabel={formatGroupLabel}
                            />
                        </Form.Group>

                        <Form.Group md={4} as={Col} controlId="exampleForm.ControlSelect1">
                            <Form.Label>Visit Date</Form.Label>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        </Form.Group>
                    </Form.Row>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSubmit}>Save</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
