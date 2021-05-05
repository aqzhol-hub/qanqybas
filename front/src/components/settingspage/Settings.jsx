import React, {useEffect, useContext, useState, createContext} from 'react';
import {Row, Col, Container, Card, Modal, Button, Form } from 'react-bootstrap'
import MyVerticallyCenteredModal from "./FileUploadModal";
import ChangePassword from "./ChangePassword";
import ChangeUserInfo from "./ChangeUserInfo";


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
                        <ChangePassword />
                    </div>
                <Col className="md-8">
                    <ChangeUserInfo />
                </Col>
                </Row>
            </Container>
        </React.Fragment>
        </>
    );
}