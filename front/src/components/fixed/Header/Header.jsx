import React, { useContext, useEffect } from "react";
import {  Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { AuthContext } from "../../../App";
import {checkAuth} from '../../../api/login';

import { BiUserCircle } from "react-icons/bi";


const Header = () => {
    const {cookies, removeCookie, isAuth, SetAuth} = useContext(AuthContext);

    useEffect(() => {
        const jwtToken = cookies.jwtToken;
        if (jwtToken){
            const isAuth = checkAuth(jwtToken);
            if(isAuth){
                SetAuth(true);
            }else{
                SetAuth(false);
            }
        }else{
            SetAuth(false);
        }
    }, [cookies, SetAuth]);

    const navStyle = {
        background: "#0092F4"
    };

    const logOut = () => {
        removeCookie("jwtToken");
        SetAuth(false);
        window.location.replace("/");
    }

    return (
    <Navbar style={navStyle} expand="lg">
    <Navbar.Brand href="/">Qangybas.kz</Navbar.Brand>
    
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
        
        {
            isAuth === true ?
            <Dropdown>
                <Dropdown.Toggle><BiUserCircle /></Dropdown.Toggle>

                <Dropdown.Menu alignRight={true}>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                    <Dropdown.Item onClick={logOut}>Log out</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>: 
            <Nav>
                <Nav.Link href="/login">Sign In</Nav.Link>
                <Nav.Link href="/registration">Sign Up</Nav.Link>
            </Nav>
        }
    </Navbar.Collapse>
    </Navbar>
    );
};
export default Header;
{/* <Nav.Link onClick={logOut}>Sign Out</Nav.Link> */}