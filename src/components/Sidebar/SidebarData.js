import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'List',
        path: '/list',
        icon: <FaIcons.FaList />,
        cName: 'nav-text'
    },
    {
        title: 'Report',
        path: '/report',
        icon: <FaIcons.FaBook />,
        cName: 'nav-text'
    },
    {
        title: 'Search',
        path: '/search',
        icon: <FaIcons.FaSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Setting',
        path: '/setting',
        icon: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
    },
    {
        title: 'Table',
        path: '/table',
        icon: <FaIcons.FaTable />,
        cName: 'nav-text'
    },
]
