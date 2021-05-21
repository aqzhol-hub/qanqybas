import {useParams} from "react-router";
import {Button, Card, Carousel, Col, Image, Row} from "react-bootstrap";
import React, {Component, useEffect, useState} from "react";
import {AllPlaces, PlacesById, preAddPlace} from "../../api/place";
import {toast} from "react-toastify";
import ReactHtmlParser from 'react-html-parser';

function ControlledCarousel({picturesList}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Row>
            <Col md={{ span: 6, offset: 3 }} >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {
                        picturesList && picturesList.length ? picturesList.map((picture, index)=>(
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={picture.url}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )): <tr />
                    }
                </Carousel>
            </Col>
        </Row>
    );
}

export default function PlaceView(){
    const { id } = useParams();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const  res = PlacesById(id);
        res.then((result)=>{
            console.log(result.data, "result.data");
            setTableData(result.data);
        }).catch((err)=>{
            toast.error("UnSuccess to load table");
        });
    },[]);
    return (
        <React.Fragment>
            {
                tableData && tableData.place
                ? <Card className="mt-5 col-md-9 offset-1">
                        <h2 className="text-center">{tableData.place.name}</h2>
                        <Card.Body>
                            <ControlledCarousel picturesList={tableData.picturesList} />
                            <h6 className="mt-5 text-center">{ReactHtmlParser(tableData.place.description)}</h6>
                        </Card.Body>
                    </Card>:
                    <tr />
            }
        </React.Fragment>
    )
}
