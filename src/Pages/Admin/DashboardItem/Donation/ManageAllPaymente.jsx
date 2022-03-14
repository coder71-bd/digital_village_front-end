import React from 'react';
import { HiTrash } from "react-icons/hi";

const ManageAllPaymente = () => {
    return (
        <div className="flex flex-col my-3">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <h3 className='text-center space-y-2 text-sm md:text-xl  lg:text-2xl'>admin see all Paymente fainal</h3>
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="rounded-lg">
            <table className="max-w-screen-xl mx-auto">
            <thead className="hidden lg:block bg-indigo-500 font-primary">
                <tr className="grid grid-cols-1 lg:grid-cols-6 place-items-center">
                    <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                        Image
                    </th>
                    <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                        Title
                    </th>
                    <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                        Email
                    </th>
                    <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                        Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b font-primary text-sm grid grid-cols-1 lg:grid-cols-6 place-items-center">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <img className="w-48 lg:w-24 rounded-lg" src='https://www.autosbangla.com/images/mercedes-benz/mercedes-benz-gle-450-img.jpg' alt='Mercedes-benz B Class 170' />
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 break-all">
                    Mercedes-benz B Class 170 
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                            shorifzaman
                            <td className="text-sm text-gray-600 px-3 py-2 whitespace-nowrap">
                        
                          sylhet,bangladesh
                    </td>
                            
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                         zaman@amin.com
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                            <span className="bg-yellow-500 text-white px-4 py-1 rounded-full font-primary">Pending</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                        <div className="flex items-center justify-center space-x-3">
                            <HiTrash className="cursor-pointer text-2xl text-red-600" />
                                <button className="bg-green-500  px-4 py-2 text-white font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300">Approve</button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr className="bg-white border-b font-primary text-sm grid grid-cols-1 lg:grid-cols-6 place-items-center">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <img className="w-48 lg:w-24 rounded-lg" src='https://www.autosbangla.com/images/mercedes-benz/mercedes-benz-gle-450-img.jpg' alt='Mercedes-benz B Class 170' />
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 break-all">
                    Mercedes-benz B Class 170 
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                            shorifzaman
                            <td className="text-sm text-gray-600 px-3 py-2 whitespace-nowrap">
                        
                          sylhet,bangladesh
                    </td>
                            
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                         zaman@amin.com
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                            <span className="bg-green-500 text-white px-4 py-1 rounded-full font-primary">success</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                        <div className="flex items-center justify-center space-x-3">
                            <HiTrash className="cursor-pointer text-2xl text-red-600" />
                                <button className="bg-green-500  px-4 py-2 text-white font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300">Approve</button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr className="bg-white border-b font-primary text-sm grid grid-cols-1 lg:grid-cols-6 place-items-center">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <img className="w-48 lg:w-24 rounded-lg" src='https://www.autosbangla.com/images/mercedes-benz/mercedes-benz-gle-450-img.jpg' alt='Mercedes-benz B Class 170' />
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 break-all">
                    Mercedes-benz B Class 170 
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                            shorifzaman
                            <td className="text-sm text-gray-600 px-3 py-2 whitespace-nowrap">
                        
                          sylhet,bangladesh
                    </td>
                            
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                         zaman@amin.com
                    </td>
                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                            <span className="bg-yellow-500 text-white px-4 py-1 rounded-full font-primary">Pending</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                        <div className="flex items-center justify-center space-x-3">
                            <HiTrash className="cursor-pointer text-2xl text-red-600" />
                                <button className="bg-green-500  px-4 py-2 text-white font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300">Approve</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ManageAllPaymente;