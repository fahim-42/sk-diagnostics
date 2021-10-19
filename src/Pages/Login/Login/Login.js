import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, isLogin, error, handleRegistration, handleEmailChange, handlePasswordChange, toggleLogin } = useAuth();
    return (
        <div className="col-lg-8 mx-auto my-5 bg-transparent border rounded-3 shadow-lg">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary text-center pt-3 mb-4 fw-bolder fst-italic">Please {isLogin ? 'Login' : 'Register'}</h3>

                <div className="row mb-3 d-flex justify-content-center">
                    <label htmlFor="inputEmail1" className="col-lg-2 col-form-label">Email</label>
                    <div className="col-lg-6">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail1" required />
                    </div>
                </div>

                <div className="row mb-3 d-flex justify-content-center">
                    <label htmlFor="inputPassword1" className="col-lg-2 col-form-label">Password</label>
                    <div className="col-lg-6">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword1" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-lg-6 offset-lg-2">
                        
                        <div className="row my-3 text-danger">{error}</div>

                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label me-auto" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mb-3">
                    <button type="submit" className="btn btn-primary mb-3 fw-bold me-2">{isLogin ? 'Login' : 'Register'}</button>
                    <button onClick={signInUsingGoogle} className="btn btn-warning mb-3 fw-bold ms-2">Google Signin</button>
                </div>
            </form>
        </div>
    );
};

export default Login;