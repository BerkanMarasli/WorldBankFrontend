import GraphOneCountry from "./GraphOneCountry"
import Button from "react-bootstrap/Button"

function Results(props) {
    const { graphData, setGraphData } = props.data
    const { setDisplayMainSearch } = props.display
    const numberOfDataPoints = graphData.length
    return (
        <div className="d-flex flex-column align-items-center">
            {numberOfDataPoints > 1 ? (
                <GraphOneCountry data={graphData}></GraphOneCountry>
            ) : numberOfDataPoints === 1 ? (
                <p>
                    Only available: year={graphData[0].year} : value=
                    {graphData[0].value}
                </p>
            ) : (
                <p>No Information Available For Search</p>
            )}
            <Button
                className="mt-4 mb-4"
                variant="primary"
                type="submit"
                size="m"
                onClick={() => handleBackClick(setGraphData, setDisplayMainSearch)}>
                Back to Search
            </Button>
        </div>
    )
}

function handleBackClick(setGraphData, setDisplayMainSearch) {
    setGraphData(null)
    setDisplayMainSearch("block")
}

export default Results
