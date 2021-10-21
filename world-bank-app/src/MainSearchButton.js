import Button from "react-bootstrap/Button"
const axios = require("axios")

function MainSearchButton(props) {
    const { countryOnlySearch, twoCountrySearch, yearRangeSearch } = props.decisions
    const { topCountrySelection, bottomCountrySelection, indicatorSelection, topYearSelection, bottomYearSelection } = props.selections
    const { setGraphData, setNumberOfCountriesCompared, setCountry1Data, setCountry2Data } = props.setData
    const { setDisplayMainSearch } = props.display
    return (
        <Button
            variant="primary"
            type="submit"
            size="m"
            onClick={() =>
                handleSearchClick(
                    setDisplayMainSearch,
                    countryOnlySearch,
                    twoCountrySearch,
                    yearRangeSearch,
                    topCountrySelection,
                    bottomCountrySelection,
                    indicatorSelection,
                    topYearSelection,
                    bottomYearSelection,
                    setGraphData,
                    setNumberOfCountriesCompared,
                    setCountry1Data,
                    setCountry2Data
                )
            }>
            Search
        </Button>
    )
}

async function handleSearchClick(
    setDisplayMainSearch,
    countryOnlySearch,
    twoCountrySearch,
    yearRangeSearch,
    topCountrySelection,
    bottomCountrySelection,
    indicatorSelection,
    topYearSelection,
    bottomYearSelection,
    setGraphData,
    setNumberOfCountriesCompared,
    setCountry1Data,
    setCountry2Data
) {
    if (countryOnlySearch) {
        // SEARCHING country only
        fetchOneCountryOnly(topCountrySelection, indicatorSelection, setGraphData, setNumberOfCountriesCompared)
    } else if (!countryOnlySearch && twoCountrySearch && !yearRangeSearch) {
        console.log("SEARCHING with two countries but no year range")
        fetchTwoCountriesWithYear(
            topCountrySelection,
            bottomCountrySelection,
            indicatorSelection,
            topYearSelection,
            setCountry1Data,
            setCountry2Data,
            setNumberOfCountriesCompared
        )
    } else if (!countryOnlySearch && twoCountrySearch && yearRangeSearch) {
        console.log("SEARCHING with two countries and year range")
        fetchTwoCountriesWithYearRange(
            topCountrySelection,
            bottomCountrySelection,
            indicatorSelection,
            topYearSelection,
            bottomYearSelection,
            setCountry1Data,
            setCountry2Data,
            setNumberOfCountriesCompared
        )
    } else if (!countryOnlySearch && !twoCountrySearch && !yearRangeSearch) {
        // SEARCHING with one countries and no year range
        fetchOneCountryWithYear(topCountrySelection, indicatorSelection, topYearSelection, setGraphData, setNumberOfCountriesCompared)
    } else if (!countryOnlySearch && !twoCountrySearch && yearRangeSearch) {
        // SEARCHING with one countries and year range
        fetchOneCountryWithYearRange(
            topCountrySelection,
            indicatorSelection,
            topYearSelection,
            bottomYearSelection,
            setGraphData,
            setNumberOfCountriesCompared
        )
    }
    setDisplayMainSearch("none")
}

//
// missing case when user can search two countries with indicator but for ALL YEARS!
//

async function fetchOneCountryOnly(topCountrySelection, indicatorSelection, setGraphData, setNumberOfCountriesCompared) {
    const response = await axios.get(`http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}`)
    const data = await response.data
    setGraphData(data)
    setNumberOfCountriesCompared(1)
}

async function fetchOneCountryWithYear(topCountrySelection, indicatorSelection, topYearSelection, setGraphData, setNumberOfCountriesCompared) {
    const response = await axios.get(`http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}/${topYearSelection}`)
    const data = await response.data
    setGraphData(data)
    setNumberOfCountriesCompared(1)
}

async function fetchOneCountryWithYearRange(
    topCountrySelection,
    indicatorSelection,
    topYearSelection,
    bottomYearSelection,
    setGraphData,
    setNumberOfCountriesCompared
) {
    const response = await axios.get(
        `http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}/${topYearSelection}/${bottomYearSelection}`
    )
    const data = await response.data
    setGraphData(data)
    setNumberOfCountriesCompared(1)
}

async function fetchTwoCountriesOnly(
    topCountrySelection,
    bottomCountrySelection,
    indicatorSelection,
    setCountry1Data,
    setCountry2Data,
    setNumberOfCountriesCompared
) {
    const responseCountry1 = await axios.get(`http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}`)
    const dataCountry1 = await responseCountry1.data
    const responseCountry2 = await axios.get(`http://localhost:8080/search/${bottomCountrySelection}/${indicatorSelection}`)
    const dataCountry2 = await responseCountry2.data
    setCountry1Data(dataCountry1)
    setCountry2Data(dataCountry2)
    setNumberOfCountriesCompared(2)
}

async function fetchTwoCountriesWithYear(
    topCountrySelection,
    bottomCountrySelection,
    indicatorSelection,
    topYearSelection,
    setCountry1Data,
    setCountry2Data,
    setNumberOfCountriesCompared
) {
    const responseCountry1 = await axios.get(`http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}/${topYearSelection}`)
    const dataCountry1 = await responseCountry1.data
    const responseCountry2 = await axios.get(`http://localhost:8080/search/${bottomCountrySelection}/${indicatorSelection}/${topYearSelection}`)
    const dataCountry2 = await responseCountry2.data
    setCountry1Data(dataCountry1)
    setCountry2Data(dataCountry2)
    setNumberOfCountriesCompared(2)
}

async function fetchTwoCountriesWithYearRange(
    topCountrySelection,
    bottomCountrySelection,
    indicatorSelection,
    topYearSelection,
    bottomYearSelection,
    setCountry1Data,
    setCountry2Data,
    setNumberOfCountriesCompared
) {
    const responseCountry1 = await axios.get(
        `http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}/${topYearSelection}/${bottomYearSelection}`
    )
    const dataCountry1 = await responseCountry1.data
    const responseCountry2 = await axios.get(
        `http://localhost:8080/search/${bottomCountrySelection}/${indicatorSelection}/${topYearSelection}/${bottomYearSelection}`
    )
    const dataCountry2 = await responseCountry2.data
    setCountry1Data(dataCountry1)
    setCountry2Data(dataCountry2)
    setNumberOfCountriesCompared(2)
}

export default MainSearchButton
