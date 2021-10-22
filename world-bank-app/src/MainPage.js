import React from "react"
import Logo from "./assets/logo.svg"
import { Button, Container, Navbar } from "react-bootstrap"
import MainSearch from "./MainSearch"
import AdminHistory from "./AdminHistory"

export default function MainPage() {
    return (
        <main>
            <Navbar bg="transparent">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} width="250" className="d-inline-block align-top" alt="World Bank logo" />
                    </Navbar.Brand>
                    <Button variant="outline-secondary">Logout</Button>
                </Container>
            </Navbar>
            <MainSearch />
            <hr />
            <AdminHistory />
        </main>
    )
}
