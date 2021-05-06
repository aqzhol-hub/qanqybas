import {Button, Form, Modal} from "react-bootstrap";
import React from "react";

export default function CountryAddModal(props) {
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
                        <Form.Control type="url"/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value="salem" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Save</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
