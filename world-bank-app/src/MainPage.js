import React from "react"
import Logo from "./assets/logo.svg"
import { Button, Container, Navbar } from "react-bootstrap"
import MainSearch from "./MainSearch"
import AdminHistory from "./AdminHistory"

export default function MainPage(props) {
    const { setIsLoggedIn } = props

    return (
        <main>
            <Navbar bg="transparent">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} width="250" className="d-inline-block align-top" alt="World Bank logo" />
                    </Navbar.Brand>
                    <Button variant="outline-secondary" onClick={() => handleLogout(setIsLoggedIn)}>
                        Logout
                    </Button>
                </Container>
            </Navbar>
            <MainSearch />
            <hr className="w-50 mx-auto" />
            <AdminHistory />
        </main>
    )
}

function handleLogout(setIsLoggedIn) {
    setIsLoggedIn(false)
    const newCookies = document.cookie.split(";").forEach((cookie) => {
        if (cookie.includes("worldBankAppSessionID")) {
            document.cookie = "worldBankAppSessionID=; max-age=0"
        }
    })
}
