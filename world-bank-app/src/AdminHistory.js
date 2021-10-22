import SearchItem from "./SearchItem"
import { CardGroup, ToggleButton, Row, Col, Accordion } from "react-bootstrap"
import { useEffect, useState } from "react"

function AdminHistory() {
    const [searches, setSearches] = useState([])
    useEffect(() => {
        async function waitForHistory() {
            const result = await getHistory()
            setSearches(result)
        }
        if (searches.length < 1) waitForHistory()
    }, [])
    return (
        <div className="d-flex mx-auto justify-content-center">
            <Accordion className="mb-5 w-75" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Search History</Accordion.Header>
                    <Accordion.Body>
                        {searches.length === 0 ? (
                            "No searches/No access to server"
                        ) : (
                            <div className="d-flex justify-content-center" data-testid="userSearchItems">
                                {getSearchItemsDisplay(searches)}
                            </div>
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

async function getHistory(values) {
    //Localhost may need to be updated when we start hosting the server
    let result = ""
    const submitToServer = await fetch(process.env.REACT_APP_API_URL + "/history", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    })
        .then(async (response) => {
            result = await response.json()
        })
        .catch((error) => {
            console.log("Error:", error)
            result = "error"
        })
    return result
}

function getSearchItemsDisplay(searches) {
    return (
        <div className="d-flex w-90 align-content-center mb-5">
            {searches.length < 1 ? (
                "No searches atm"
            ) : (
                <CardGroup>
                    <Row xs={1} md={2} className="g-4">
                        {searches.map((search) => {
                            return (
                                <Col>
                                    <SearchItem
                                        country_1={search.country_1}
                                        country_2={search.country_2}
                                        indicator={search.indicator}
                                        date_time={search.date_time}
                                        year_1={search.year_1}
                                        year_2={search.year_2}
                                        user_id={search.user_id}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </CardGroup>
            )}
        </div>
    )
}

export default AdminHistory
