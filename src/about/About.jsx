import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../nav/Navigation";

export default function About() {
    return (
        <Container className="container-custom">
            <Navigation />
            <h1>About</h1>
            <p>Hi, This is an app in which user can find another user's github profile and look up their public repositories.
            <br />
            You can simply search for the user on the <Link className="link" to="/">home</Link> page.</p>
        </Container>
    );
}