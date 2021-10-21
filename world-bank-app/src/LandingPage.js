import React, { useState } from "react"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import Login from "./Login"
import Logo from "./assets/logo.svg"
import CreateAccount from "./CreateAccount"

export default function LandingPage() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Container className="d-flex flex-column justify-content-center h-100">
            <Row>
                <Col
                    className="d-inline-flex flex-column justify-content-center"
                    xs={12}
                    md={7}>
                    <img
                        src={Logo}
                        className="d-inline-block align-top w-75"
                        alt="World Bank logo"
                    />
                </Col>
                <Col xs={8} md={5}>
                    <Login />
                    <hr />
                    <div className="d-grid">
                        <Button
                            variant="success"
                            size="lg"
                            onClick={handleShow}>
                            Create Account
                        </Button>
                    </div>
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Create an Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CreateAccount />
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}
