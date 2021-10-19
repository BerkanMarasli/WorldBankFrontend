import MainSearchCountrySelection from "./MainSearchCountrySelection"
import { useState, useEffect } from "react"
const axios = require("axios")

function MainSearch() {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        fetchData(setCountries)
    }, [])

    console.log("countries: ", countries)
    return (
        <div>
            <h1>Main Search</h1>
            {countries ? <MainSearchCountrySelection data={countries} /> : null}
        </div>
    )
}

async function fetchData(setCountries) {
    const response = await axios.get("http://localhost:8080/distinctCountries")
    const data = await response.data
    console.log(data)
    setCountries(data)
}

export default MainSearch
