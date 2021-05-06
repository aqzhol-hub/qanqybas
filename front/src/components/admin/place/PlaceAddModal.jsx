import {Button, Col, Form, Image, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import { MdCameraAlt } from "react-icons/md";
import Select from 'react-select';

const groupedOptions = [
    { value: 'almaty', label: 'almaty' },
    { value: 'astana', label: 'astana' },
    { value: 'taraz', label: 'taraz' }
];

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const images = [
    {
        url:"https://www.worldometers.info/img/flags/small/tn_af-flag.gif",
    },
    {
        url:"https://www.worldometers.info/img/flags/small/tn_am-flag.gif",
    },
    {
        url:"https://www.worldometers.info/img/flags/small/tn_be-flag.gif",
    },
    {
        url:"https://www.worldometers.info/img/flags/small/tn_bn-flag.gif",
    },
    {
        url:"https://www.worldometers.info/img/flags/small/tn_cn-flag.gif",
    },
    {
        url:"https://www.worldometers.info/img/flags/small/tn_cn-flag.gif",
    },
    {
        url:"https://www.worldometers.info/img/flags/small/tn_cn-flag.gif",
    },
    {
        url:"https://www.worldometers.info/img/flags/small/tn_cn-flag.gif",
    },
    {
        url:"https://www.worldometers.info/img/flags/small/tn_cn-flag.gif",
    },
    {
        url:"https://www.worldometers.info/img/flags/small/tn_cn-flag.gif",
    },

]

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

export default function PlaceAddModal(props) {
    const [images, setImages] = useState([]);

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Places
                </Modal.Title>
            </Modal.Header>
            <Modal.Body scrollable={true}>
                <Form className="col-md-9 offset-2">
                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value="salem" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" type="text"/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group md={3} as={Col} controlId="formGridAddress2">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control value="salem" />
                        </Form.Group>

                        <Form.Group md={3} as={Col} controlId="exampleForm.ControlSelect1">
                            <Form.Label>City</Form.Label>
                            <Select
                                onChange={function () {
                                    console.log("salas");
                                }}
                                defaultValue={{ value: 'almaty', label: 'almaty' }}
                                options={groupedOptions}
                                formatGroupLabel={formatGroupLabel}
                            />
                        </Form.Group>

                        <Form.Group md={6} as={Col} controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tags</Form.Label>
                            <Select
                                isMulti
                                onChange={function () {
                                    console.log("salas");
                                }}
                                defaultValue={{ value: 'almaty', label: 'almaty' }}
                                options={groupedOptions}
                                name="colors"
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md={9}>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control value="salem" />
                        </Form.Group>
                        <Form.Group className="mt-4" as={Col} md={3}>
                            <Button variant="danger" className="btn-block" onClick={props.onHide}><MdCameraAlt /></Button>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        {
                            images.map((image, index) => (
                                <Col className="mt-1" key={index} md={2}>
                                    <Image style={{ maxWidth: '70px', width: '60px', height: '60px' }} className="img-fluid" src={image.url} />
                                </Col>
                            ))
                        }
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Save</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
