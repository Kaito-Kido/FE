import React, {useState} from 'react'
import Button from "@material-tailwind/react/Button";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../../components/Table/Table'

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
    ]
    return [...data, ...data, ...data]
    }

function Setting() {
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
            <div class="w-full flex flex-row">
                <div>
                    <div class="md:flex md:items-center my-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Tuổi tối thiểu
                        </label>
                        </div>
                        <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder='' />
                        </div>
                    </div>
                    <div class="md:flex md:items-center my-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Tuổi tối đa
                        </label>
                        </div>
                        <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder='' />
                        </div>
                    </div>
                    <div class="md:flex md:items-center my-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Sĩ số tối đa
                        </label>
                        </div>
                        <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder='' />
                        </div>
                    </div>
                    <div class="md:flex md:items-center my-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Điểm đạt
                        </label>
                        </div>
                        <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder='' />
                        </div>
                    </div>
                </div>
                <div class="m-6">
                    <Button
                        color="gray"
                        buttonType="filled"
                        size="lg"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="dark"
                    >
                        Lưu
                    </Button> 
                </div>
            </div>
            <div class="mt-4 flex flex-row">
                <div class="w-full">
                    <div>
                        <Table columns={columns} data={data} /> 
                    </div>
                    <div class="flex justify-end">
                        <Button
                            color="gray"
                            buttonType="filled"
                            size="lg"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="dark"
                        >
                            Thêm
                        </Button> 
                    </div>
                </div>
                <div class="mx-3 flex flex-row">
                    <div class="mx-2 flex items-center">
                        <Button
                            color="gray"
                            buttonType="filled"
                            size="lg"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="dark"
                        >
                            Sửa
                        </Button> 
                    </div>
                    <div class="mx-2 flex items-center">
                        <Button
                            color="gray"
                            buttonType="filled"
                            size="lg"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="dark"
                        >
                            Xóa
                        </Button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
