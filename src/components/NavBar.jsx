import { useState } from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    
    const handleClose = () => {
      setIsOpen(false);
    };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse in={isOpen} id="d-flex flex-column flex-lg-row align-items-center justify-content-center">
        <Nav className="mx-auto justify-content-center text-center gap-5 flex-lg-row flex-column align-items-center">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => {onUpdateActiveLink('home'); handleClose()}}>Home</Nav.Link>
          <Nav.Link href="#intro" className={activeLink === 'intro' ? 'active' : ''} onClick={() => {onUpdateActiveLink('intro'); handleClose();}}>About me</Nav.Link>
          <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active' : ''} onClick={() => {onUpdateActiveLink('experience'); handleClose();}}>Experience</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => {onUpdateActiveLink('projects'); handleClose();}}>Projects</Nav.Link>
        </Nav>
        <span className='button-container'>
        <Link to="contact" smooth={true} duration={500} onClick={handleClose}>
          <button className="vvd">
            <span>Contact me</span>
          </button>
        </Link>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar