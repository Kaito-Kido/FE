import React, { useState } from 'react'
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

function Search() {
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
        // <div class="w-full">
        //     {submitting && 
        //     <div>Submitting Form...</div>}
        //     <form onSubmit={handleSubmit}>
        //         <fieldset>
        //             <label>
        //                 <p>Khối</p>
        //                 <input name="khoi" />
        //             </label>
        //             <label>
        //                 <p>Lớp</p>
        //                 <input name="lop" />
        //             </label>
        //             <label>
        //                 <p>Họ và tên</p>
        //                 <input name="ten" />
        //             </label>
        //         </fieldset>
        //         <button type="submit">Tìm kiếm</button>
        //     </form>
        // </div>
        <div class="w-full">
        <form class="w-full max-w-sm">
            <div class="md:flex md:items-center my-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Khối
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe" />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    Lớp
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    Họ và tên
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Tìm kiếm
                </button>
                </div>
            </div>
        </form>
        <div className="mt-6">
            <Table columns={columns} data={data} />
        </div>
        </div>
    )
}

export default Search
