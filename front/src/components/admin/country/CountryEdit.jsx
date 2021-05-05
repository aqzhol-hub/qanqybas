import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Button, Card, Form} from "react-bootstrap";

export default function CountryEdit(){
    const { id } = useParams();

    return (
        <Card className="mt-5 col-md-6 offset-3">
            <h2 className="text-center mt-3">Country</h2>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Flag</Form.Label>
                        <Form.Control type="url"/>
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