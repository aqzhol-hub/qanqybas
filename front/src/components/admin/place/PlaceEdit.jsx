import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Button, Card, Form} from "react-bootstrap";
import Select from "react-select";

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

export default function PlaceEdit(){
    const { id } = useParams();

    return (
        <Card className="mt-5 col-md-6 offset-3">
            <h2 className="text-center mt-3">City</h2>
            <Card.Body>
                <Form className="col-md-9 offset-2">
                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value="salem" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" type="text"/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control value="salem" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
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

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>City</Form.Label>
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
                    <Form.Group controlId="formGridAddress2">
                        <Button variant="primary">Update</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}