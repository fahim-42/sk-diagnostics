import React from 'react';
import { Card } from 'react-bootstrap';
import './Feedback.css';

const Feedback = () => {
    return (
        <div id="feedback">
            <h2 className="feedback-header text-center py-3 my-0 fw-bold fst-italic fs-1">Our <span className="span-text fw-bold fst-italic text-warning">Happy</span> Clients</h2>

            <div className="d-flex justify-content-around my-5">
                <Card className="col-lg-4 col-sm-12 shadow-lg rounded-3" style={{ width: '22rem' }}>
                    <Card.Img variant="top" className="p-3" src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold fs-4 mb-4">Martin Phillips, <small className="fw-lighter fst-italic">banker</small></Card.Title>
                        <Card.Text className="mb-3 fw-normal fst-italic">“I had an MRI scan today. All I can say is, it is not easy to hold still for 20 minutes. If you try to hold your body still for 20 minutes and feel like nothing is happening, you can always tell you mind, ‘come on, a few minutes more,’ and you will get through. But if you panic you can’t. I say it is a life-saving scan, but not easy.”</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="col-lg-4 col-sm-12 shadow-lg rounded-3" style={{ width: '22rem' }}>
                    <Card.Img variant="top" className="p-3" src="https://images.unsplash.com/photo-1445404590072-16ef9c18bd83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold fs-4 mb-4">Carrie Hopwell, <small className="fw-lighter fst-italic">model</small></Card.Title>
                        <Card.Text className="mb-3 fw-normal fst-italic">“Everyone in Cardiology department was courteous, helpful and professional. They gave a clear explanation of the test results and this was followed by written confirmation and advice. Thank you.”</Card.Text>
                    </Card.Body>
                </Card>


                <Card className="col-lg-4 col-sm-12 shadow-lg rounded-3" style={{ width: '22rem' }}>
                    <Card.Img variant="top" className="p-3" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold fs-4 mb-4">David Bailey, <small className="fw-lighter fst-italic">photographer</small></Card.Title>
                        <Card.Text className="mb-3 fw-normal fst-italic">“I had a major surgery and I was so impressed by their behaviour and treatment. The staff was always helpful, friendly and understanding of the pain i has having. I even received acupuncture and physiotherapy treatments while i was there.”</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Feedback;