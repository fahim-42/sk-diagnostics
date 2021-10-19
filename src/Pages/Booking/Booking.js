import { getByTestId } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { testId } = useParams();

    const [testDetails, setTestDetails] = useState([]);
    const [test, setTest] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setTestDetails(data));
    }, [])

    useEffect(() => {
        const selectTest = testDetails.find(
            (data) => data.id == testId);
            setTest(selectTest);
    }, [testDetails]);

    console.log(test);
    return (
        <div>
            <h2>Book your test: {testId}</h2>

            <Card className="col-lg-3 col-sm-5 shadow-lg rounded-3" style={{ width: '22rem' }}>
                <Card.Img variant="top" className="p-1 bg-warning border border-1 rounded-circle" src="" />
                <Card.Body>
                    <Card.Title className="text-center fw-bold fs-3 my-2"></Card.Title>
                    <Card.Text className="mb-3 fw-normal fst-italic"></Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;