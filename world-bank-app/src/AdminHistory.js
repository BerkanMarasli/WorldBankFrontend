import SearchItem from "./SearchItem"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react"

function AdminHistory() {
    const [searches, setSearches] = useState([])
    useEffect(() => {
        async function waitForHistory() {
            const result = await getHistory()
            setSearches(result)
        }
        if (searches.length < 1) waitForHistory()
    })
    return (
        <div>
            <h3>Search History</h3>

            {searches.length === 0 ? (
                "No searches/No access to server"
            ) : (
                <div data-testid="userSearchItems">
                    {getSearchItemsDisplay(searches)}
                </div>
            )}
        </div>
    )
}

async function getHistory(values) {
    //Localhost may need to be updated when we start hosting the server
    let result = ""
    const submitToServer = await fetch("http://localhost:8080/history", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    })
        .then(async (response) => {
            console.log("got a response")
            result = await response.json()
        })
        .catch((error) => {
            console.log("Error:", error)
            result = "error"
        })
    console.log("getting hsitory")
    return result
}

function getSearchItemsDisplay(searches) {
    return (
        <div>
            {searches.length < 1
                ? "No searches atm"
                : searches.map((search) => {
                      return (
                          <SearchItem
                              country_1={search.country_1}
                              country_2={search.country_2}
                              indicator={search.indicator}
                              time={search.time}
                              year_1={search.year_1}
                              year_2={search.year_2}
                              user_id={search.user_id}
                          />
                      )
                  })}
        </div>
    )
}

export default AdminHistory
