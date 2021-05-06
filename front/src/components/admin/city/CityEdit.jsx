import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Button, Card, Form} from "react-bootstrap";

export default function CityEdit(){
    const { id } = useParams();

    return (
        <Card className="mt-5 col-md-6 offset-3">
            <h2 className="text-center mt-3">City</h2>
            <Card.Body>
                <Form className="col-md-9 offset-2">
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Logo</Form.Label>
                        <Form.Control type="url"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select">
                            <option>Kazakhstan</option>
                            <option>Russia</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value="salem" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Button variant="primary">Update</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}