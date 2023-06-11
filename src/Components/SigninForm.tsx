import { Col, Form, Row, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SigninForm = () => {
    const [passwordVisible, setPasswordVisibility] = useState(false);
    const handleSigninSubmit = () => {
        console.log("Signed In!");
    }
    const handlePasswordVisibilty = () => {
        console.log(passwordVisible);
        setPasswordVisibility(!passwordVisible)
    }
    return (
        <Form onSubmit={handleSigninSubmit}>
            <Stack gap={4} >
                <Row>
                    <Col>
                        <Form.Group controlId="email" >
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control required type="email" />
                        </Form.Group>
                        <Form.Group controlId="password" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" />
                            <button onClick={() => { handlePasswordVisibilty }} className={passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'}></button>

                        </Form.Group>
                        <Stack direction="horizontal" className="justify-content-center mx-4" gap={5} >
                            <button type="submit" className="btn btn-success" >Sign In</button>
                            <NavLink to="/" className={`nav-item nav-link`}>
                                <button type="button" className="btn btn-danger"  >Cancel</button>
                            </NavLink>

                        </Stack>
                        <p>{passwordVisible}</p>
                    </Col>
                </Row>
            </Stack>
        </Form >
    )
}

export default SigninForm;
