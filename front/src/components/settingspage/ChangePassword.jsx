import {Button, Card, Col, Form} from "react-bootstrap";
import React from "react";

export default function ChangePassword() {
    return (
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
    )
}