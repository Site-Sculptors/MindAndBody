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
                    </Col>
                </Row>
            </Stack>
        </Form>
    )
}

export default SigninForm;
