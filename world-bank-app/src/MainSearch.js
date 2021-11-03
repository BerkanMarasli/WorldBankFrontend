import MainSearchCountrySelection from "./MainSearchCountrySelection"
import MainSearchIndicatorSelection from "./MainSearchIndicatorSelection"
import MainSearchYearSelection from "./MainSearchYearSelection"
import MainSearchButton from "./MainSearchButton"
import Results from "./Results"
import ResultsTwoCountries from "./ResultsTwoCountries"
import { useState, useEffect } from "react"
import Spinner from "react-bootstrap/Spinner"
const axios = require("axios")

function MainSearch() {
    const [countries, setCountries] = useState(null)
    const [indicators, setIndicators] = useState(null)
    const [years, setYears] = useState(null)
    //
    const [oneCountrySearch, setOneCountrySearch] = useState(true)
    const [yearRangeSearch, setYearRangeSearch] = useState(false)
    //
    const [topCountrySelection, setTopCountrySelection] = useState(null)
    const [bottomCountrySelection, setBottomCountrySelection] = useState(null)
    const [indicatorSelection, setIndicatorSelection] = useState(null)
    const [topYearSelection, setTopYearSelection] = useState(null)
    const [bottomYearSelection, setBottomYearSelection] = useState(null)
    //
    const [graphData, setGraphData] = useState(null)
    const [country1Data, setCountry1Data] = useState(null)
    const [country2Data, setCountry2Data] = useState(null)
    //
    const [displayMainSearch, setDisplayMainSearch] = useState("block")
    //
    useEffect(() => {
        fetchCountries(setCountries)
        fetchIndicators(setIndicators)
        fetchYears(setYears)
    }, [])

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="ml-auto mr-auto" style={{ display: displayMainSearch }}>
                {countries && indicators && years ? (
                    <div className="d-inline-flex flex-column w-80 align-items-center">
                        <Spinner animation="border" variant="primary" />
                        <MainSearchCountrySelection
                            data={countries}
                            decisions={{
                                oneCountrySearch: oneCountrySearch,
                                setOneCountrySearch: setOneCountrySearch,
                            }}
                            selections={{
                                setTopCountrySelection: setTopCountrySelection,
                                setBottomCountrySelection: setBottomCountrySelection,
                            }}
                        />
                        <MainSearchIndicatorSelection
                            data={indicators}
                            selections={{
                                setIndicatorSelection: setIndicatorSelection,
                            }}
                        />
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
                        <MainSearchButton
                            decisions={{
                                oneCountrySearch: oneCountrySearch,
                                yearRangeSearch: yearRangeSearch,
                            }}
                            selections={{
                                topCountrySelection: topCountrySelection,
                                bottomCountrySelection: bottomCountrySelection,
                                indicatorSelection: indicatorSelection,
                                topYearSelection: topYearSelection,
                                bottomYearSelection: bottomYearSelection,
                            }}
                            setData={{
                                setGraphData: setGraphData,
                                setCountry1Data: setCountry1Data,
                                setCountry2Data: setCountry2Data,
                            }}
                            display={{ setDisplayMainSearch: setDisplayMainSearch }}
                        />
                    </div>
                ) : (
                    <Spinner animation="border" variant="primary" />
                )}
            </div>
            <div>
                {graphData && oneCountrySearch ? (
                    <Results data={{ graphData: graphData, setGraphData: setGraphData }} display={{ setDisplayMainSearch: setDisplayMainSearch }} />
                ) : null}
                {country1Data && country2Data && !oneCountrySearch ? (
                    <ResultsTwoCountries
                        data={{
                            country1Data: country1Data,
                            setCountry1Data: setCountry1Data,
                            country2Data: country2Data,
                            setCountry2Data: setCountry2Data,
                        }}
                        display={{ setDisplayMainSearch: setDisplayMainSearch }}
                    />
                ) : null}
            </div>
        </div>
    )
}

async function fetchCountries(setCountries) {
    const response = await axios.get(process.env.REACT_APP_API_URL + "/distinctCountries")
    const data = await response.data
    setCountries(data)
}

async function fetchIndicators(setIndicators) {
    const response = await axios.get(process.env.REACT_APP_API_URL + "/distinctIndicators")
    const data = await response.data
    setIndicators(data)
}

async function fetchYears(setYears) {
    const response = await axios.get(process.env.REACT_APP_API_URL + "/distinctYears")
    const data = await response.data
    setYears(data)
}

export default MainSearch
