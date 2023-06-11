import { Col, Form, Row, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SigninForm = () => {

    return (
        <Form>
            <Stack gap={4} >
                <Row>
                    <Col>
                        <Form.Group controlId="userName" >
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                        <Form.Group controlId="password" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                        <Stack direction="horizontal" className="align-center">
                            <button type="submit" className="btn btn-success m-3" >Sign In</button>
                            <NavLink to="/" className={`nav-item nav-link mx-4 `}>
                                <button type="button" className="btn btn-danger m-3"  >Cancel</button>
                            </NavLink>

                        </Stack>
                    </Col>
                </Row>
            </Stack>
        </Form>
    )
}

export default SigninForm;
