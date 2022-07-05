import { Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './navigate.css'
export default function Navigation() {
    return (
        <>
        
            <Navbar bg="dark" variant="dark" fixed="top">
                    <Nav className="ms-5 navbar">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className="ms-3" as={Link} to="/about">About</Nav.Link>
                    </Nav>
            </Navbar>
            </>
    )
}