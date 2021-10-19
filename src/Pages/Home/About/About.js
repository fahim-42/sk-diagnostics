import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div id="about">
            <h2 className="about-header text-center py-3 my-0 fw-bold fst-italic fs-1">About Us</h2>

            <div className="my-5">
                <Card className="col-lg-6 mx-auto bg-transparent border rounded-3 shadow-lg" style={{ width: '22rem' }}>
                    <Card.Img variant="top" className="image pt-3 mx-auto" src="https://i.ibb.co/DKPF5ZH/logo.png" />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold fs-3 my-3">Sk Diagnostics</Card.Title>
                        <Card.Text className="mb-3 fw-normal fst-italic">We provide services for critical patients using state-of-art equipment.
                        <br />
                        <br />
                        Our certified technologist are highly qualified and experienced with these machineries.
                        <br />
                        <br />
                        We have different department regarding to different tests. We provide quickest result with accuracy.</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            {/* <div className="col-lg-8 mx-auto mt-5 bg-transparent border rounded-3 shadow-lg">
                <img className="m-auto" src="https://i.ibb.co/DKPF5ZH/logo.png" alt="" />
                <div className="m-0">
                    <h2 className="text-center py-2">
                        <span className="text-warning fst-italic fw-bolder">SK </span>
                        <span className="text-info fst-italic fw-bolder">Diagnostics</span>
                    </h2>
                    <div className="fw-bold">

                    </div>
                </div>
            </div> */}
        </div>

    );
};

export default About;