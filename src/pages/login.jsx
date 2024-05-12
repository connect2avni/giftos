import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., authentication)
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" block>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
