import React, { Component } from 'react';
import { NavbarData } from './NavbarData';
import { FcBusiness } from "react-icons/fc";
import { Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Navbar () {
        let user = JSON.parse(localStorage.getItem(''))
        const navigate = useNavigate();
        function logOut() {
            localStorage.clear();
            window.location.href = '/login'
        }
        return (
            <nav class='flex justify-between bg-gray-800'>
                <div class='flex justify-center items-center p-4'>
                    <div class=''>
                        <FcBusiness />
                    </div>
                    <h1 class='ml-2 text-white font-medium items-center'>Student Management</h1>
                </div>
                {/* <ul class='flex items-center space-x-2'>
                    { NavbarData.map((item, index) => {
                        return (
                            <li key={index} class='px-4 py-2 items-center text-white font-medium hover:bg-gray-700 rounded'>
                                <a href='{item.url}'>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                    <li><a href=''></a></li>
                </ul> */}
                <Nav class='flex items-center text-white font-medium hover:bg-gray-700 rounded px-4'>
                    <NavDropdown title="User Name">
                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </nav>
        )
}

export default Navbar