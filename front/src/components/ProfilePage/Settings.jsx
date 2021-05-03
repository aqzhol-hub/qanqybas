import React, {useEffect, useContext, useState, createContext} from 'react';
import {Row, Col, Container, Card, Modal, Button, Form } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal{...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Input File Url
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.File  id="custom-file-translate-scss" label="Custom file input" lang="en" custom/>
                <div className="mt-3">
                <Button >Upload</Button>
                <button onClick={props.onHide} className="btn btn-outline-primary">Close</button>
                </div>
            </Form>
        </Modal.Body>
      </Modal>
    );
}

const initStatePasswords = {
    oldpass: "",
    newpass: "",
    repass: ""
}

export default function UserSettings() {
    const [user, setUser] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const [passData, setPassData] = useState(initStatePasswords);
    const handleChangePassword = (e) => {
        const { name, value } = e.target;
        setPassData({...passData, [name] : value});
    }
    
    const handleSubmit = async (e) => {

    }
    return (
        <>
        <React.Fragment>
            <Container className="mt-3">
                <Row className="row">
                    <div className="col-md-4 mb-3">
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-column align-items-center text-center">
                                    <Card.Img src="https://source.unsplash.com/random" className="rounded-circle w-50 h-50"/>
                                    <div className="mt-3">
                                        <a href="https://source.unsplash.com/random">https://source.unsplash.com/random</a>
                                        <button onClick={() => setModalShow(true)} className="btn btn-block btn-outline-primary">Upload new photo</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                        <Card className="mt-3">
                            <Card.Body>
                                <Form>
                                    <Form.Row className="mt-1">
                                        <Form.Label column="sm" lg={4}>Old Password</Form.Label>
                                        <Col>
                                        <Form.Control size="sm" type="password" placeholder="***************" />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row className="mt-1">
                                        <Form.Label column="sm" lg={4}>New Password</Form.Label>
                                        <Col>
                                        <Form.Control size="sm" type="password" placeholder="***************" />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row className="mt-1">
                                        <Form.Label column="sm" lg={4}>Repeat Password</Form.Label>
                                        <Col className="mt-3">
                                        <Form.Control size="sm" type="password" placeholder="***************" />
                                        </Col>
                                    </Form.Row>
                                    <Button size="sm float-right mt-3">Upload</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                <Col className="md-8">

                </Col>
                </Row>
            </Container>
        </React.Fragment>
        </>
    );
}