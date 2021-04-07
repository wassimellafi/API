import React from "react";
import Card from "react-bootstrap/Card";
function ListUsers(props) {
    return (
        <div>
            <Card style={{ width: "18rem", color: "blue" }}>
                <Card.Body>
                    <Card.Title>{props.user.username}</Card.Title>
                    <Card.Text>{props.user.name}</Card.Text>
                    <Card.Text>{props.user.email}</Card.Text>
                    <Card.Text>{props.user.address.street}</Card.Text>
                    <Card.Text>{props.user.address.suite}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ListUsers;
