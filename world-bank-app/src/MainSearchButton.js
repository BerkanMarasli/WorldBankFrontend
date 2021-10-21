import Button from "react-bootstrap/Button"
const axios = require("axios")

function MainSearchButton(props) {
    const { countryOnlySearch, twoCountrySearch, yearRangeSearch } = props.decisions
    const { topCountrySelection, bottomCountrySelection, indicatorSelection, topYearSelection, bottomYearSelection } = props.selections
    const { setGraphData } = props.setData
    return (
        <Button
            variant="primary"
            type="submit"
            size="m"
            onClick={() =>
                handleSearchClick(
                    countryOnlySearch,
                    twoCountrySearch,
                    yearRangeSearch,
                    topCountrySelection,
                    bottomCountrySelection,
                    indicatorSelection,
                    topYearSelection,
                    bottomYearSelection,
                    setGraphData
                )
            }>
            submit
        </Button>
    )
}

async function handleSearchClick(
    countryOnlySearch,
    twoCountrySearch,
    yearRangeSearch,
    topCountrySelection,
    bottomCountrySelection,
    indicatorSelection,
    topYearSelection,
    bottomYearSelection,
    setGraphData
) {
    if (countryOnlySearch) {
        console.log("SEARCHING country only")
        fetchOneCountryOnly(topCountrySelection, indicatorSelection, setGraphData)
    } else if (!countryOnlySearch && twoCountrySearch && !yearRangeSearch) {
        console.log("SEARCHING with two countries but no year range")
    } else if (!countryOnlySearch && twoCountrySearch && yearRangeSearch) {
        console.log("SEARCHING with two countries and year range")
    } else if (!countryOnlySearch && !twoCountrySearch && !yearRangeSearch) {
        console.log("SEARCHING with one countries and no year range")
        fetchOneCountry(topCountrySelection, indicatorSelection, topYearSelection, setGraphData)
    } else if (!countryOnlySearch && !twoCountrySearch && yearRangeSearch) {
        console.log("SEARCHING with one countries and year range")
        fetchOneCountryWithYearRange(topCountrySelection, indicatorSelection, topYearSelection, bottomYearSelection, setGraphData)
    }
}

async function fetchOneCountryOnly(topCountrySelection, indicatorSelection, setGraphData) {
    const response = await axios.get(`http://localhost:8080/search/${topCountrySelection}/${indicatorSelection}`)
    const data = await response.data
    setGraphData(data)
}

async function fetchOneCountry(topCountrySelection, indicatorSelection, topYearSelection, setGraphData) {
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

export default MainSearchButton
