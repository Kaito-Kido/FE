import React, { useState, useEffect }from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Button from "@material-tailwind/react/Button";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../../components/Table/Table'

const mon = [
    {
        label:'Toán',
        value:"Toan",
    },
    {
        label:'Lý',
        value:'Ly',
    },
    {
        label:'Hóa',
        value:'Hoa',
    },
    {
        label:'Sinh',
        value:'Sinh',
    },
    {
        label:'Sử',
        value:'Su',
    },
    {
        label:'Địa',
        value:'Dia',
    },
    {
        label:'Văn',
        value:'Van',
    },
    {
        label:'Đạo Đức',
        value:'DaoDuc',
    },
    {
        label:'Thể dục',
        value:'TheDuc',
    },
]

const lop = [
    {
        label:'10A1',
        value:'10A1',
    },
    {
        label:'10A2',
        value:'10A2',
    },
    {
        label:'10A3',
        value:'10A3',
    },
    {
        label:'10A4',
        value:'10A4',
    },
    {
        label:'11A1',
        value:'11A1',
    },
    {
        label:'11A2',
        value:'11A2',
    },
    {
        label:'11A3',
        value:'11A3',
    },
    {
        label:'12A1',
        value:'12A1',
    },
    {
        label:'12A2',
        value:'12A2',
    },
]

const hocKy = [
    {
        label:'Học Kỳ 1',
        value:'HK1',
    },
    {
        label:'Học Kỳ 2',
        value:'HK2'
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


function TableScore() {

    // const data = React.useMemo(() => getData(), [])
    const [data, setData] = useState([]);

    const [Lop, setLop] = useState("10A1");
    const [HocKy, setHocKy] = useState("HK1");
    const [Mon, setMon] = useState("Toan")
    // const body = {
    //     "Lop":Lop,
    //     "HocKy":HocKy,
    //     "Mon":Mon
    // }
    
    // fetch('http://localhost:3000/grade/gradeTable', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     body: JSON.stringify(body)
    // })
    // .then(response => response.json())
    // .then(res => {
    //     setData(res);
    //     console.log("success", data);
    // });
    


    

    const columns = React.useMemo(() => [
        {
          Header: "Họ và tên",
          accessor: 'HoTen',
        //   Cell: AvatarCell,
        //   imgAccessor: "imgUrl",
        //   emailAccessor: "email",
        },
        {
          Header: "Mã học sinh",
          accessor: 'MaHS',
        },
        {
          Header: "Điểm 15 phút",
          accessor: 'Diem15p',
        //   Cell: StatusPill,
        },
        {
          Header: "Điểm 1 tiết",
          accessor: 'Diem1Tiet',
        },
        {
          Header: "Điểm học kỳ",
          accessor: 'DiemHK',
        //   Filter: SelectColumnFilter,  // new
        //   filter: 'includes',
        },
        {
            Header: "Điểm trung bình",
            accessor: 'DiemTB',
          },
      ], [])
    
      


    function handleSubmit(e) {
        e.preventDefault();
        console.log(Lop,Mon,HocKy);
        const body = {
            "Lop":Lop,
            "HocKy":HocKy,
            "Mon":Mon
        }
        console.log(body);

        fetch('http://localhost:3000/grade/gradeTable', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            setData(data)
            console.log("success", data)
        });
    }


    return (
        <div class="w-full">
        <div class="w-full flex content-start justify-between items-center">
        <div class="w-full">
        
        <form onSubmit={handleSubmit}>
            <select onChange={e => setMon(e.target.value)} >
                {mon.map((mon) => (
                <option value={mon.value}>{mon.label}</option>
                ))}
            </select>

            <select onChange={e => setHocKy(e.target.value)} >
                {hocKy.map((hocKy) => (
                <option value={hocKy.value}>{hocKy.label}</option>
                ))}
            </select>

            <select onChange={e => setLop(e.target.value)} >
                {lop.map((lop) => (
                <option value={lop.value}>{lop.label}</option>
                ))}
            </select>

            <input type='submit' />
        </form>

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
        </div>
        
        
        <div class="flex">
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
