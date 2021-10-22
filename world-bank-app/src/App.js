import React, { useState, useEffect } from "react"
import "./App.css"
import LandingPage from "./LandingPage"
import MainPage from "./MainPage"
const axios = require("axios")

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        async function checkUserLoggedIn() {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/sessions", { withCredentials: true })
            const statusCode = await response.status
            console.log(statusCode)
            if (statusCode === 200) {
                setIsLoggedIn(true)
            }
        }
        checkUserLoggedIn()
    }, [])
    return !isLoggedIn ? <LandingPage setIsLoggedIn={setIsLoggedIn} /> : <MainPage setIsLoggedIn={setIsLoggedIn} />
}

export default App
