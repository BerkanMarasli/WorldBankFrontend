import SearchItem from "./SearchItem"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function AdminHistory() {
    return (
        <div>
            <h3>Search History</h3>
            <CardGroup>
                <SearchItem
                    title="Employment in the UK"
                    user="SigmaStudent20"
                    time="3"
                />
                <SearchItem
                    title="Employment in the UK"
                    user="SigmaStudent20"
                    time="3"
                />
                <SearchItem
                    title="Employment in the UK"
                    user="SigmaStudent20"
                    time="3"
                />
            </CardGroup>
        </div>
    )
}

export default AdminHistory

function searchItem(title, user, time) {
    return (
        <Card>
            <Card.Body data-testId="userSearchItem">
                <Card.Title data-testId="searchTitle">
                    Searched for: {title}
                </Card.Title>
                <Card.Text data-testId="username">
                    Searched by: {user}
                </Card.Text>
                <Button variant="primary">View this search</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    Last searched for {time} mins ago
                </small>
            </Card.Footer>
        </Card>
    )
}
