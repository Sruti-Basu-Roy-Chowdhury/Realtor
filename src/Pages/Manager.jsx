import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'; 

const Manager = () => {
    const navigate = useNavigate();
    // State for managers data
    const [managers, setManagers] = useState([
        { id: 1, name: 'John Smith', username: 'john.smith', password: 'jsmith123' },
        { id: 2, name: 'Emily Johnson', username: 'emily.j', password: 'ejohnson456' },
        { id: 3, name: 'Michael Williams', username: 'michael.w', password: 'mwill789' },
        { id: 4, name: 'Sarah Brown', username: 'sarah.b', password: 'sbrown012' }
    ]);

    // Function to handle delete
    const handleDelete = (id) => {
        setManagers(managers.filter(manager => manager.id !== id));
    };

    // Function to handle edit - navigate to edit page with manager id
    const handleEdit = (id) => {
        navigate(`/edit-manager/${id}`);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            
            {/* Header section */}
            <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <h1 className="text-2xl font-bold text-blue-500">Create Manager</h1>
            </div>
            
            {/* Table section with white background */}
            <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manager Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {managers.map((manager) => (
                                <tr key={manager.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{manager.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.username}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.password}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button 
                                            onClick={() => handleEdit(manager.id)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button 
                                            onClick={() => handleDelete(manager.id)}
                                            className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manager;