import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, image, price, description } = props.service;
    return (
        <Card className="col-lg-3 col-sm-5 shadow-lg rounded-3" style={{ width: '22rem' }}>
            <Card.Img variant="top" className="p-1 bg-warning border border-1 rounded-circle" src={image} />
            <Card.Body>
                <Card.Title className="text-center fw-bold fs-3 my-2">{name}</Card.Title>
                <Card.Text className="mb-3 fw-normal fst-italic">{description}</Card.Text>
                <Card.Title className="fw-bold fs-5 mb-3">Test Fee: {price}tk</Card.Title>
                
                <Link to={`/booking/${id}`}>
                    <Button variant="primary" className="text-center mx-auto">Book A Test</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Service;