import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons';

export default function NavBarTemp() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            alt="Team"
                            className="rounded-circle img-fluid"
                            style={{ width: "36px", height: "36px", objectFit: "cover" }}
                        />

                    </Navbar.Brand>
                    <Nav className="ms-3">
                        <Nav.Link href="#experience" className="links">experience</Nav.Link>
                        <Nav.Link href="#skills" className="links">Compétence</Nav.Link>
                        <Nav.Link href="#posts" className="links">linkedIn</Nav.Link>
                        <Nav.Link href="#contact" className="links">contact</Nav.Link>


                    </Nav>
                </div>


                <FontAwesomeIcon icon={faHouseMedical} />
            </Container>
        </Navbar>
    );
}
