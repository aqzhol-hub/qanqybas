import {Button, Col, Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Select from "react-select";
import {AddCity, preAddCity} from "../../../api/city";
import {toast, ToastContainer} from "react-toastify";

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

const initData = {name: "", logo: "", country:{}};
export default function CityAddModal(props) {
    const [data, setData] = useState(initData);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const res = preAddCity();
        res.then((result)=>{
            console.log("result", result);

            for (let i = 0; i < result.length; i++) {
                country.push({
                    value: result[i].name,
                    label: result[i].name,
                    id: result[i].id,
                    name: result[i].name,
                    logo: result[i].logo
                });
                console.log(result[i]);
            }
            setCountry(country);

        }).catch((err)=>{
            console.log(err, "err000000000000");
            toast.error("UnSuccess to load country");
        });

    }, []);

    const handleChangeCountry = (selectedOption) => {
        setData(prev => ({...prev, "country": {id: selectedOption.id, name: selectedOption.name, logo: selectedOption.logo}}));
    };

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setData(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = () => {
        const res = AddCity(data);
        res.then((result)=>{
            if(result.status===200) {
                setData(initData);
                props.onHide();
                toast.success("Success");
            }
        }).catch((err)=>{
            toast.error("UnSuccess");
        });
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add City
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="col-md-9 offset-2">
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Logo</Form.Label>
                        <Form.Control onChange={handleChange} name="logo" value={data.logo} type="url"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Select
                            required
                            name="cityId"
                            onChange={handleChangeCountry}
                            options={country}
                            formatGroupLabel={formatGroupLabel}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={handleChange} name="name" value={data.name} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSubmit}>Save</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
