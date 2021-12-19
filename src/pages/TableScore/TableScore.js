import React, { useState }from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Button from "@material-tailwind/react/Button";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../../components/Table/Table'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const getData = () => {
const data = [
    {
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    status: 'Active',
    role: 'Admin',
    age: 27,
    imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    title: 'Product Directives Officer',
    department: 'Intranet',
    status: 'Inactive',
    role: 'Owner',
    age: 43,
    imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    title: 'Forward Response Developer',
    department: 'Directives',
    status: 'Active',
    role: 'Member',
    age: 32,
    imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
    name: 'Jenny Wilson',
    email: 'jenny.wilson@example.com',
    title: 'Central Security Manager',
    department: 'Program',
    status: 'Offline',
    role: 'Member',
    age: 29,
    imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
    name: 'Kristin Watson',
    email: 'kristin.watson@example.com',
    title: 'Lean Implementation Liaison',
    department: 'Mobility',
    status: 'Inactive',
    role: 'Admin',
    age: 36,
    imgUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
    name: 'Cameron Williamson',
    email: 'cameron.williamson@example.com',
    title: 'Internal Applications Engineer',
    department: 'Security',
    status: 'Active',
    role: 'Member',
    age: 24,
    imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
]
return [...data, ...data, ...data]
}

function TableScore() {

    const columns = React.useMemo(() => [
        {
          Header: "Name",
          accessor: 'name',
          Cell: AvatarCell,
          imgAccessor: "imgUrl",
          emailAccessor: "email",
        },
        {
          Header: "Title",
          accessor: 'title',
        },
        {
          Header: "Status",
          accessor: 'status',
          Cell: StatusPill,
        },
        {
          Header: "Age",
          accessor: 'age',
        },
        {
          Header: "Role",
          accessor: 'role',
          Filter: SelectColumnFilter,  // new
          filter: 'includes',
        },
      ], [])
    
      const data = React.useMemo(() => getData(), [])

    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        },3000)
    }

    return (
        <div class="w-full">
        <div class="w-full grid grid-cols-3 gap-4 content-start justify-center items-center">
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Khối
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Account settings
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Support
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        License
                        </a>
                    )}
                    </Menu.Item>
                    <form method="POST" action="#">
                    <Menu.Item>
                        {({ active }) => (
                        <button
                            type="submit"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm'
                            )}
                        >
                            Sign out
                        </button>
                        )}
                    </Menu.Item>
                    </form>
                </div>
                </Menu.Items>
            </Transition>
        </Menu>

        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Môn
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Account settings
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Support
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        License
                        </a>
                    )}
                    </Menu.Item>
                    <form method="POST" action="#">
                    <Menu.Item>
                        {({ active }) => (
                        <button
                            type="submit"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm'
                            )}
                        >
                            Sign out
                        </button>
                        )}
                    </Menu.Item>
                    </form>
                </div>
                </Menu.Items>
            </Transition>
        </Menu>    

        <div>
        <Button
            color="gray"
            buttonType="filled"
            size="lg"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="dark"
            class="font-medium"
        >
            Xác nhận
        </Button>  
        </div>    

        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Học kỳ
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Account settings
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Support
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        License
                        </a>
                    )}
                    </Menu.Item>
                    <form method="POST" action="#">
                    <Menu.Item>
                        {({ active }) => (
                        <button
                            type="submit"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm'
                            )}
                        >
                            Sign out
                        </button>
                        )}
                    </Menu.Item>
                    </form>
                </div>
                </Menu.Items>
            </Transition>
        </Menu>   

        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Lớp
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Account settings
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Support
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        License
                        </a>
                    )}
                    </Menu.Item>
                    <form method="POST" action="#">
                    <Menu.Item>
                        {({ active }) => (
                        <button
                            type="submit"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm'
                            )}
                        >
                            Sign out
                        </button>
                        )}
                    </Menu.Item>
                    </form>
                </div>
                </Menu.Items>
            </Transition>
        </Menu>

        <div class="font-medium">
        <Button
            color="gray"
            buttonType="filled"
            size="lg"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="dark"
            class="font-medium"
        >
            Lưu thay đổi
        </Button>      
        </div>      
        </div>
        <div class="w-full">
            <Table columns={columns} data={data} />
        </div>
    </div>
        

        
    )
}

export default TableScore
