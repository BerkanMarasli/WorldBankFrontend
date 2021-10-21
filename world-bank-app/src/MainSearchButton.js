import Button from "react-bootstrap/Button"

function MainSearchButton(props) {
    const { countryOnlySearch, twoCountrySearch, yearRangeSearch } =
        props.decisions
    const {
        topCountrySelection,
        bottomCountrySelection,
        indicatorSelection,
        topYearSelection,
        bottomYearSelection,
    } = props.selections
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
                    bottomYearSelection
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
    bottomYearSelection
) {
    console.log("SEARCHING...")
    console.log("top country selected is: ", topCountrySelection)
    console.log("bottom country selected is: ", bottomCountrySelection)
    console.log("indicator selected: ", indicatorSelection)
    console.log("top year: ", topYearSelection)
    console.log("bottom year: ", bottomYearSelection)
    if (countryOnlySearch) {
        console.log("SEARCHING country only")
    } else if (!countryOnlySearch && twoCountrySearch && !yearRangeSearch) {
        console.log("SEARCHING with two countries but no year range")
    } else if (!countryOnlySearch && twoCountrySearch && yearRangeSearch) {
        console.log("SEARCHING with two countries and year range")
    } else if (!countryOnlySearch && !twoCountrySearch && !yearRangeSearch) {
        console.log("SEARCHING with one countries and no year range")
    } else if (!countryOnlySearch && !twoCountrySearch && yearRangeSearch) {
        console.log("SEARCHING with one countries and year range")
    }
}

export default MainSearchButton
