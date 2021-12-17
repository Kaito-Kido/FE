import React from 'react';
import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';


function Navbar() {
    return (
        <>
            <div class='min-h-screen flex flex-row'>
                <nav className='nav-menu' class='flex flex-col w-56 bg-gray-800 overflow-hidden'>
                    <ul className='nav-menu-items' class='flex flex-col py-4'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} >
                                    <Link to={item.path} class='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white'>
                                        <span class='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>{item.icon}</span>
                                        <span class='text-sm font-medium'>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar