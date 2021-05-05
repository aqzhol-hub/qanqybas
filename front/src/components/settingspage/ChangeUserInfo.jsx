import React, {useState, Fragment} from "react";
import {Form, InputGroup, Col, Card} from "react-bootstrap";
import DatePicker from "react-datepicker";


const initState = {firstname: "", lastname: "", email: "", city: "", gender: ""};

export default function ChangeUserInfo() {
    const [validated, setValidated] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Card className="ml-3">
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    disabled
                                    type="email"
                                    placeholder="email@example.com"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>

                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                                Country
                            </Form.Label>
                            <Form.Control
                                as="select"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                                City
                            </Form.Label>
                            <Form.Control
                                as="select"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                                Gender
                            </Form.Label>
                            <Form.Control
                                as="select"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                                ROLE
                            </Form.Label>
                            <Form.Control
                                as="select"
                                disabled
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">ROLE_USER</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                                Birthday
                            </Form.Label>
                            <DatePicker as={Col} selected={startDate} onChange={date => setStartDate(date)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>
                    <button type="button" className="btn btn-primary">Primary</button>
                </Form>
            </Card.Body>
        </Card>
    );
}