import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Categories() {
    return (
        <>
            <Container fluid>
                <Nav className="justify-content-center nav--text"
                     activeKey="/home">
                    <Nav.Item >
                        <Nav.Link className = "active" href="/">Top Headlines</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="" >Business</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="">Entertainment</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="">General</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="">Health</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="">Science</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  eventKey="" >Sports</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="category">Technology</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </>
    )
 }

