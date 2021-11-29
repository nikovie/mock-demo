import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


const Header = ({ users, login, setUser }) => {
    console.log(`login`, login)
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
            {!login
              ? null 
              : <Nav.Link href="#" as="span">
                <Link to="/add" className="menuItem">Add new</Link>
              </Nav.Link>
            }
            

            <NavDropdown 
              title={!login ? 'Login' : `Logged in: ${login.username}`} 
              id='nav-dropdown' 
              onSelect={(id) => setUser(id)}
            >
              {users
                .map(({username, id}) => (
                  <NavDropdown.Item 
                    key={id} 
                    eventKey={id}
                  >
                    {username}
                  </NavDropdown.Item>
                ))
              }
            </NavDropdown>
            
          </Nav>

        </Navbar.Collapse>
    </Navbar>
    )
}

export default Header
