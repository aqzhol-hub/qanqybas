import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';



const Header = ({ onSelect, activeKey, ...props }) => {
    const navStyle = {
        background: "#0092F4"
    };

    return (
    <Navbar style={navStyle} expand="lg">
    <Navbar.Brand href="#home">GoDieGo</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
            <NavDropdown title="City" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Almaty</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Aktau</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Shymkent</NavDropdown.Item>
            </NavDropdown>
        </Nav>

        <Nav className="mr-auto ml-auto">
            <NavDropdown title="Posters" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Places" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Magazine" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        
        <Nav>
            <Nav.Link href="#memes">Sign in</Nav.Link>
            <Nav.Link href="#memes">Sign up</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
};
export default Header;