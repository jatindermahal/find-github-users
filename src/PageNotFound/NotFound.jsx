import { Container } from "react-bootstrap";
import Navigation from "../nav/Navigation";

export default function NotFound() {
    return (
        <Container className="container">
            <Navigation />
            <h1>404: Page Not Found</h1>
            
        </Container>
    );
}