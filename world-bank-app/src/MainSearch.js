import MainSearchCountrySelection from "./MainSearchCountrySelection"
import MainSearchIndicatorSelection from "./MainSearchIndicatorSelection"
import MainSearchYearSelection from "./MainSearchYearSelection"
import MainSearchButton from "./MainSearchButton"
import Results from "./Results"
import { useState, useEffect } from "react"
const axios = require("axios")

function MainSearch() {
    const [countries, setCountries] = useState(null)
    const [indicators, setIndicators] = useState(null)
    const [years, setYears] = useState(null)
    //
    const [countryOnlySearch, setCountryOnlySearch] = useState(true)
    const [twoCountrySearch, setTwoCountrySearch] = useState(false)
    const [yearRangeSearch, setYearRangeSearch] = useState(false)
    //
    const [topCountrySelection, setTopCountrySelection] = useState(null)
    const [bottomCountrySelection, setBottomCountrySelection] = useState(null)
    const [indicatorSelection, setIndicatorSelection] = useState(null)
    const [topYearSelection, setTopYearSelection] = useState(null)
    const [bottomYearSelection, setBottomYearSelection] = useState(null)
    //
    const [countryOnlyData, setCountryOnlyData] = useState(null)
    //
    useEffect(() => {
        fetchCountries(setCountries)
        fetchIndicators(setIndicators)
        fetchYears(setYears)
    }, [])

    return (
        <div>
            {countries ? (
                <MainSearchCountrySelection
                    data={countries}
                    decisions={{
                        setCountryOnlySearch: setCountryOnlySearch,
                        countryOnlySearch: countryOnlySearch,
                        twoCountrySearch: twoCountrySearch,
                        setTwoCountrySearch: setTwoCountrySearch,
                    }}
                    selections={{
                        setTopCountrySelection: setTopCountrySelection,
                        setBottomCountrySelection: setBottomCountrySelection,
                    }}
                />
            ) : null}
            {indicators ? (
                <MainSearchIndicatorSelection
                    data={indicators}
                    selections={{
                        setIndicatorSelection: setIndicatorSelection,
                    }}
                />
            ) : null}
            {years && !countryOnlySearch ? (
                <MainSearchYearSelection
                    data={years}
                    decisions={{
                        yearRangeSearch: yearRangeSearch,
                        setYearRangeSearch: setYearRangeSearch,
                    }}
                    selections={{
                        setTopYearSelection: setTopYearSelection,
                        setBottomYearSelection: setBottomYearSelection,
                    }}
                />
            ) : null}
            <br />
            <br />
            <br />
            <MainSearchButton
                decisions={{
                    countryOnlySearch: countryOnlySearch,
                    twoCountrySearch: twoCountrySearch,
                    yearRangeSearch: yearRangeSearch,
                }}
                selections={{
                    topCountrySelection: topCountrySelection,
                    bottomCountrySelection: bottomCountrySelection,
                    indicatorSelection: indicatorSelection,
                    topYearSelection: topYearSelection,
                    bottomYearSelection: bottomYearSelection,
                }}
                setData={{ setCountryOnlyData: setCountryOnlyData }}
            />
            {countryOnlyData ? <Results data={{countryOnlyData}} /> : null}
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
