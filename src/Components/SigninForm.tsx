import { Col, Form, Row, Stack } from "react-bootstrap";

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
                            <button type="button" className="btn btn-danger m-3"  >Cancel</button>
                        </Stack>
                    </Col>
                </Row>
            </Stack>
        </Form>
    )
}

export default SigninForm;
