import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListUsers from "../ListUsers/ListUsers";
function Users(props) {
    return (
        <div>
            <Row>
                {props.User.map((user, key) => {
                    return (
                        <Col key={user.id}>
                            <ListUsers user={user} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default Users;
