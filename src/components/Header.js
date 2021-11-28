import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  
    return (
      <Navbar bg="light-gray" expand="sm" className='ph3'>
        <Navbar.Brand>Mock-demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Link href="#" as="span">
              <Link to="/" className="menuItem">Home</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/articles" className="menuItem">Articles</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/add" className="menuItem">Add new</Link>
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>
    </Navbar>
    )
}

export default Header
