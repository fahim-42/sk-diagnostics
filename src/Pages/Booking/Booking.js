import { getByTestId } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { testId } = useParams();

    const [testDetails, setTestDetails] = useState([]);
    const [singleTest, setSingleTest] = useState({});

    useEffect(() => {
        fetch('/testDetails.json')
            .then(res => res.json())
            .then(data => setTestDetails(data.allDetails));
    }, [])

    useEffect(() => {
        const selectTest = testDetails.find(allDetails => allDetails.id == testId);
        setSingleTest(selectTest);
    },[testDetails])

    return (
        <div>
            <h2 className="text-center text-success fst-italic fw-bolder fs-1 my-3">Test #0{testId}</h2>

            <Card className="col-lg-3 col-sm-5 shadow-lg rounded-3 mx-auto my-4" style={{ width: '22rem' }}>
                <Card.Img variant="top" className="p-1 bg-warning border border-1 rounded-circle" src={singleTest?.image} />
                <Card.Body>
                    <Card.Title className="text-center fw-bold fs-3 my-2">{singleTest?.name}</Card.Title>
                    <Card.Text className="mb-3 fw-normal fst-italic">{singleTest?.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;