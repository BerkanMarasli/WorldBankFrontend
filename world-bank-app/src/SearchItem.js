import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"

import Button from "react-bootstrap/Button"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { date } from "yup/lib/locale"

function SearchItem(props) {
    const [username, setUsername] = useState("")
    const formik = useFormik({
        onSubmit: async () => {
            //Note: Atm clicking this button sometimes crashes the server and then the webpage.
            await props.country_1
            const info = {
                country_1: await props.country_1,
                country_2: await props.country_2,
                indicator: await props.indicator,
                user: username,
            }
            alert("Redirecting to the search results of the following query: " + JSON.stringify(info))
        },
    })
    useEffect(() => {
        async function waitForUsername() {
            const nameOfUser = await getUsername(props.user_id)
            setUsername(nameOfUser)
        }
        waitForUsername()
    })
    return (
        <Card>
            <Card.Body data-testid="userSearchItem">
                <Card.Title data-testid="searchTitle">Searched for: {props.indicator}</Card.Title>
                <Card.Text data-testid="country">
                    For this country/countries: {props.country_1} {props.country_2 ? ", " + props.country_2 : ""}
                </Card.Text>
                <Card.Text data-testid="username">Searched by: {username}</Card.Text>
                <Form onSubmit={formik.handleSubmit}>
                    <Button data-testid="viewSearch" variant="primary" type="submit">
                        View this search
                    </Button>
                </Form>
            </Card.Body>
            <Card.Footer>
                <small data-testid="time" className="text-muted">
                    Search occurred on {getDateTimeString(props.date_time)}
                </small>
            </Card.Footer>
        </Card>
    )
}

async function getUsername(userId) {
    //fetch username here
    const fetchUsername = await fetch(`${process.env.REACT_APP_API_URL}/username/${userId}`).catch((error) => {
        console.log("Failed to fetch bro. ")
        console.log(error)
    })
    const response = await fetchUsername.json()

    return response[0].email
}

function getDateTimeString(UTCDateTime) {
    let dateTimeStr = new Date(UTCDateTime)
    return dateTimeStr.toString()
}

export default SearchItem
