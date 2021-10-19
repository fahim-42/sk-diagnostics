import React from 'react';

const Contact = () => {
    return (
        <div className="col-lg-8 mx-auto my-5 bg-transparent border rounded-3 shadow-lg">
            <form>
                <h2 className="bg-dark text-white text-center py-2 my-0 fw-bold fst-italic fs-2">Contact Us</h2>

                <div className="row mt-5 mb-3 d-flex justify-content-center">
                    <label htmlFor="inputText1" className="col-lg-2 col-form-label">Full Name</label>
                    <div className="col-lg-6">
                        <input type="text" className="form-control colsp" id="inputtext1" placeholder="Your name" />
                    </div>
                </div>

                <div className="row mb-3 mb-3 d-flex justify-content-center">
                    <label htmlFor="inputEmail1" className="col-lg-2 col-form-label">Email</label>
                    <div className="col-lg-6">
                        <input type="email" className="form-control" id="inputEmail1" placeholder="Your Email" required />
                    </div>
                </div>

                <div className="row mb-3 d-flex justify-content-center">
                    <label htmlFor="inputText2" className="col-lg-2 col-form-label">Message</label>
                    <div className="col-lg-6">
                        <input type="text" className="form-control colsp" id="inputtext2" placeholder="How can we help you ?" />
                    </div>
                </div>

                <div className="d-flex justify-content-center mb-3">
                    <button type="submit" className="btn btn-primary mb-3 fw-bold me-2">Make Contact</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;