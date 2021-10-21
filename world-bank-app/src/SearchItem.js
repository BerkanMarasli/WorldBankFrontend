import Card from "react-bootstrap/Card"

import Button from "react-bootstrap/Button"

function SearchItem(props) {
    return (
        <Card>
            <Card.Body data-testId="userSearchItem">
                <Card.Title data-testId="searchTitle">
                    Searched for: {props.title}
                </Card.Title>
                <Card.Text data-testId="username">
                    Searched by: {props.user}
                </Card.Text>
                <Button variant="primary">View this search</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    Last searched for {props.time} mins ago
                </small>
            </Card.Footer>
        </Card>
    )
}

export default SearchItem
