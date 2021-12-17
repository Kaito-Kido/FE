import React from 'react';
import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import Report from '../pages/Report/Report';
import Search from '../pages/Search/Search';
import Setting from '../pages/Setting/Setting';
import Table from '../pages/Table/Table';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Routes = [
    {
        path:'/',
        exact: true,
        page: () => <Home />,
    },
    {
        path: '/list',
        exact: true,
        page: () => <List />,
    },
    {
        path: '/report',
        exact: true,
        page: () => <Report />,
    },
    {
        path: '/search',
        exact: true,
        page: () => <Search />,
    },
    {
        path: '/setting',
        exact: true,
        page: () => <Setting />,
    },
    {
        paht: '/table',
        exact: true,
        page: () => <Table />,
    }
];

const menuItems = {
    path: '/',
    routes: [
        {
            path:'/',
            name: 'Home',
            icon: <FaIcons.FaHome />,
            component: <Home />,
        },
        {
            path: '/list',
            name: 'List',
            icon: <FaIcons.FaList />,
            component: <List />,
        },
        {
            path: '/report',
            name: 'Report',
            icon: <FaIcons.FaBook />,
            component: <Report />,
        },
        {
            path: '/search',
            name: 'Search',
            icon: <FaIcons.FaSearch />,
            compoenent: <Search />,
        },
        {
            path: '/setting',
            name: 'Setting',
            icon: <AiIcons.AiFillSetting />,
            component: <Setting />,
        },
        {
            path: '/table',
            name: 'Table',
            icon: <FaIcons.FaTable />,
            component: <Table />,
        }
    ]
}

export { Routes, menuItems };