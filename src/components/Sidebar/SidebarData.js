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
        title: 'Danh sách học sinh',
        path: '/list',
        icon: <FaIcons.FaList />,
        cName: 'nav-text'
    },
    {
        title: 'Lập báo cáo',
        path: '/report',
        icon: <FaIcons.FaBook />,
        cName: 'nav-text'
    },
    {
        title: 'Tra cứu',
        path: '/search',
        icon: <FaIcons.FaSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Lập bảng điểm',
        path: '/table',
        icon: <FaIcons.FaTable />,
        cName: 'nav-text'
    },
    {
        title: 'Cài đặt',
        path: '/setting',
        icon: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
    },
    {
        title: 'Danh sách lớp',
        path: '/classlist',
        icon: <FaIcons.FaList />,
        cName: 'nav-text',
    }
]
