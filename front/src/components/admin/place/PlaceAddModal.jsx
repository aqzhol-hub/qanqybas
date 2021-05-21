import {Button, Col, Form, Image, Modal} from "react-bootstrap";
import React, {useState, useEffect, useRef, useContext} from "react";
import {MdCameraAlt} from "react-icons/md";
import Select from 'react-select';
import {preAddPlace, AddPlace} from '../../../api/place'
import { ToastContainer, toast } from "react-toastify";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AuthContext} from "../../../App";

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

const initData = {name: "", description: "", rating: "", tags: [], cityId: "", images: []}

export default function PlaceAddModal(props) {
    const [tagOptions, setTagOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [data, setData] = useState(initData);
    const [imageLink,setImageLink] = useState({url: ""});

    const handleChangeImage = (e) => {
        const {name, value} = e.target;
        setImageLink(prev => ({...prev, [name]: value}))
    };

    const handleChangeData = (e) => {
        const {name, value} = e.target;
        setData(prev => ({...prev, [name]: value}));
    };

    const handleChangeCity = (selectedOption) => {
        setData(prev => ({...prev, "cityId": selectedOption.id}));
    };

    const handleAddImage = () => {
        data.images.push(imageLink.url);
        setData(prev => ({...prev, "images": data.images}));
        setImageLink({url: ""});
    };

    const handleChangeTag = (selectedOption) => {
        let tagIdList = [];
        for (let i = 0; i < selectedOption.length; i++) {
            tagIdList.push(selectedOption[i].id);
        }
        setData(prev => ({...prev, "tags": tagIdList}));
    };

    const handleSubmit = (e) => {
        const res = AddPlace(data);
        res.then((result)=>{
          if(result.status===200) {
              setData(initData);
              toast.success("Success");
          }
        }).catch((err)=>{
            toast.error("UnSuccess");
        });
    }

    useEffect(() => {
        const res = preAddPlace();
        res.then((result)=>{
            for (let i = 0; i < result.tagsList.length; i++) {
                tagOptions.push({
                    value: result.tagsList[i].name,
                    label: result.tagsList[i].name,
                    id: result.tagsList[i].id
                });
            }
            setTagOptions(tagOptions);

            for (let i = 0; i < result.cities.length; i++) {
                cityOptions.push({
                    value: result.cities[i].name,
                    label: result.cities[i].name,
                    id: result.cities[i].id
                });
            }
            setCityOptions(cityOptions);
        });
    }, []);

    return (
        <Modal {...props} size="lg" centered>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Places
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
                        <Form.Group md={3} as={Col} controlId="formGridAddress2">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control required name="rating" value={data.rating} onChange={handleChangeData} />
                        </Form.Group>

                        <Form.Group md={3} as={Col} controlId="exampleForm.ControlSelect1">
                            <Form.Label>City</Form.Label>
                            <Select
                                required
                                name="cityId"
                                onChange={handleChangeCity}
                                options={cityOptions}
                                formatGroupLabel={formatGroupLabel}
                            />
                        </Form.Group>

                        <Form.Group md={6} as={Col} controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tags</Form.Label>
                            <Select
                                required
                                isMulti
                                onChange={handleChangeTag}
                                options={tagOptions}
                                name="tag"
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md={9}>
                            <Form.Label>Images</Form.Label>
                            <Form.Control name="url" onChange={handleChangeImage} value={imageLink.url} />
                        </Form.Group>
                        <Form.Group className="mt-4" as={Col} md={3}>
                            <Button onClick={handleAddImage} variant="danger" className="btn-block"><MdCameraAlt /></Button>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        {
                            data.images.map((image, index) => (
                                <Col className="mt-1" key={index} md={2}>
                                    <Image style={{ maxWidth: '70px', width: '60px', height: '60px' }} className="img-fluid" src={image} />
                                </Col>
                            ))
                        }
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
