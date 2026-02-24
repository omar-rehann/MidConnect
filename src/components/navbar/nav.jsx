import "../../styles/all.css"
import "./nav.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
     <Navbar expand="lg" className="nav">
      <Container className="d-flex justify-content-between align-items-center">

        <Navbar.Brand href="#home">
       <i className="fas fa-heart-pulse fa-1x text-primary mb-3"></i> prescripto
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
                        <Nav.Link>
      <Link to="/" className="link">Home</Link>

                        </Nav.Link>
                          <Nav.Link>
      <Link to="/about" className="link">About</Link>

                        </Nav.Link>
                        <Nav.Link>
      <Link to="/alldoctor" className="link">All Doctors</Link>

                        </Nav.Link>
                       
                         <Nav.Link>
      <Link to="/contact" className="link">Contact US</Link>

                        </Nav.Link>
                          <Nav.Link>
      <Link to="/adminpanel" className="link">Admin Panel</Link>

                        </Nav.Link>

            

          </Nav>
        </Navbar.Collapse>

        <div className="login">
                <Link to="/createaccount" className="link">
                          <button  className="btn btn-primary outsidenav">Create Account</button>

                </Link>

        </div>

      </Container>
    </Navbar>
    <div className="row">
        <div className="col-12 text-center d-flex justify-content-center">
            <hr />
        </div>
    </div>
    </>
   
    

  );
}

export default Header;