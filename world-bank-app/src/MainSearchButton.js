import Button from "react-bootstrap/Button"
const axios = require("axios")
const ADMIN_ID = 106

function MainSearchButton(props) {
    const { oneCountrySearch, yearRangeSearch } = props.decisions
    const { topCountrySelection, bottomCountrySelection, indicatorSelection, topYearSelection, bottomYearSelection } = props.selections
    const { setGraphData, setCountry1Data, setCountry2Data } = props.setData
    const { setDisplayMainSearch } = props.display
    return (
        <Button
            className="mt-4 mb-4"
            variant="primary"
            type="submit"
            size="m"
            onClick={() =>
                handleSearchClick(
                    setDisplayMainSearch,
                    oneCountrySearch,
                    yearRangeSearch,
                    topCountrySelection,
                    bottomCountrySelection,
                    indicatorSelection,
                    topYearSelection,
                    bottomYearSelection,
                    setGraphData,
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
    oneCountrySearch,
    yearRangeSearch,
    topCountrySelection,
    bottomCountrySelection,
    indicatorSelection,
    topYearSelection,
    bottomYearSelection,
    setGraphData,
    setCountry1Data,
    setCountry2Data
) {
    if (oneCountrySearch) {
        // SEARCHING country only
        fetchOneCountryOnly(topCountrySelection, indicatorSelection, setGraphData)
        addSearchToHistory(topCountrySelection, null, indicatorSelection, 1960, 2015, ADMIN_ID)
    } else if (!oneCountrySearch && !yearRangeSearch) {
        // SEARCHING with two countries but no year range
        fetchTwoCountriesWithYear(topCountrySelection, bottomCountrySelection, indicatorSelection, topYearSelection, setCountry1Data, setCountry2Data)
        addSearchToHistory(topCountrySelection, bottomCountrySelection, indicatorSelection, topYearSelection, null, ADMIN_ID)
    } else if (!oneCountrySearch && yearRangeSearch) {
        // SEARCHING with two countries and year range
        fetchTwoCountriesWithYearRange(
            topCountrySelection,
            bottomCountrySelection,
            indicatorSelection,
            topYearSelection,
            bottomYearSelection,
            setCountry1Data,
            setCountry2Data
        )
        addSearchToHistory(topCountrySelection, bottomCountrySelection, indicatorSelection, bottomYearSelection, topYearSelection, ADMIN_ID)
    } else if (!oneCountrySearch && !yearRangeSearch) {
        // SEARCHING with one countries and no year range
        fetchOneCountryWithYear(topCountrySelection, indicatorSelection, topYearSelection, setGraphData)
        addSearchToHistory(topCountrySelection, null, indicatorSelection, topYearSelection, null, ADMIN_ID)
    } else if (!oneCountrySearch && yearRangeSearch) {
        // SEARCHING with one countries and year range
        fetchOneCountryWithYearRange(topCountrySelection, indicatorSelection, topYearSelection, bottomYearSelection, setGraphData)
        addSearchToHistory(topCountrySelection, null, indicatorSelection, bottomYearSelection, topYearSelection, ADMIN_ID)
    }
    setDisplayMainSearch("none")
}

async function fetchOneCountryOnly(topCountrySelection, indicatorSelection, setGraphData) {
    const response = await axios.get(`http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}`)
    const data = await response.data
    setGraphData(data)
}

async function fetchOneCountryWithYear(topCountrySelection, indicatorSelection, topYearSelection, setGraphData) {
    const response = await axios.get(`http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}/${topYearSelection}`)
    const data = await response.data
    setGraphData(data)
}

async function fetchOneCountryWithYearRange(topCountrySelection, indicatorSelection, topYearSelection, bottomYearSelection, setGraphData) {
    const response = await axios.get(
        `http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}/${topYearSelection}/${bottomYearSelection}`
    )
    const data = await response.data
    setGraphData(data)
}

/*
// missing case when user can search two countries with indicator but for ALL YEARS!
async function fetchTwoCountriesOnly(topCountrySelection, bottomCountrySelection, indicatorSelection, setCountry1Data, setCountry2Data) {
    const responseCountry1 = await axios.get(`http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}`)
    const dataCountry1 = await responseCountry1.data
    const responseCountry2 = await axios.get(`http://localhost:8080/search/${bottomCountrySelection}/${indicatorSelection}`)
    const dataCountry2 = await responseCountry2.data
    setCountry1Data(dataCountry1)
    setCountry2Data(dataCountry2)
}
*/

async function fetchTwoCountriesWithYear(
    topCountrySelection,
    bottomCountrySelection,
    indicatorSelection,
    topYearSelection,
    setCountry1Data,
    setCountry2Data
) {
    const responseCountry1 = await axios.get(`http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}/${topYearSelection}`)
    const dataCountry1 = await responseCountry1.data
    const responseCountry2 = await axios.get(`http://localhost:8080/search/${bottomCountrySelection}/${indicatorSelection}/${topYearSelection}`)
    const dataCountry2 = await responseCountry2.data
    setCountry1Data(dataCountry1)
    setCountry2Data(dataCountry2)
}

async function fetchTwoCountriesWithYearRange(
    topCountrySelection,
    bottomCountrySelection,
    indicatorSelection,
    topYearSelection,
    bottomYearSelection,
    setCountry1Data,
    setCountry2Data
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
}

async function addSearchToHistory(countryOne, countryTwo, indicatorName, yearOne, yearTwo, user_id) {
    const response = await axios.post(`http://localhost:8080/postHistory`, {
        countryOne: countryOne,
        countryTwo: countryTwo,
        indicatorCode: indicatorName,
        yearOne: yearOne,
        yearTwo: yearTwo,
        user_id: user_id,
    })
    const data = await response.data
}

export default MainSearchButton
