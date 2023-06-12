import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FormEvent, useRef, useState } from "react"

const SigninForm = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [passwordVisible, setPasswordVisibility] = useState(false);

    const handleSigninSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log("Signed In: ");
        console.log(emailRef.current!.value);
        console.log(passwordRef.current!.value);

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
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group controlId="password" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" ref={passwordRef} />
                            <button onClick={() => { handlePasswordVisibilty }} className={passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'}></button>

                        </Form.Group>
                        <Stack direction="horizontal" className="justify-content-center mx-4" gap={5} >
                            <Button type="submit" className="btn btn-success" >Sign In</Button>
                            <NavLink to="/" className={`nav-item nav-link`}>
                                <Button type="button" className="btn btn-danger"  >Cancel</Button>
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
