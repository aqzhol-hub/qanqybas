import {Button, Card, Form, Modal} from "react-bootstrap";
import React from "react";

export default function MyVerticallyCenteredModal(props) {
    return (
        <Modal{...props} size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Input File Url
                </Modal.Title>
                {/*<Card.Img src="https://source.unsplash.com/random" className="w-50 h-50 d-flex justify-content-center"/>*/}
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