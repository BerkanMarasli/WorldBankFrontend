import MainSearchCountrySelection from "./MainSearchCountrySelection"
import MainSearchIndicatorSelection from "./MainSearchIndicatorSelection"
import MainSearchYearSelection from "./MainSearchYearSelection"
import { useState, useEffect } from "react"
const axios = require("axios")

function MainSearch() {
    const [countries, setCountries] = useState(null)
    const [indicators, setIndicators] = useState(null)
    const [years, setYears] = useState(null)
    useEffect(() => {
        fetchCountries(setCountries)
        fetchIndicators(setIndicators)
        fetchYears(setYears)
    }, [])

    return (
        <div>
            {/* <h1>Main Search</h1> */}
            <br />
            <br />
            <br />
            {countries ? <MainSearchCountrySelection data={countries} /> : null}
            {indicators ? (
                <MainSearchIndicatorSelection data={indicators} />
            ) : null}
            {years ? <MainSearchYearSelection data={years} /> : null}
        </div>
    )
}

async function fetchCountries(setCountries) {
    const response = await axios.get("http://localhost:8080/distinctCountries")
    const data = await response.data
    setCountries(data)
}

async function fetchIndicators(setIndicators) {
    const response = await axios.get("http://localhost:8080/distinctIndicators")
    const data = await response.data
    setIndicators(data)
}

async function fetchYears(setYears) {
    const response = await axios.get("http://localhost:8080/distinctYears")
    const data = await response.data
    setYears(data)
}

export default MainSearch
