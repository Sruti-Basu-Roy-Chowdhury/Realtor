import React, { useState } from 'react';
import Navbar from '../Components/Navbar'; 

const Manager = () => {
    // State for managers data
    const [managers, setManagers] = useState([
        { id: 1, name: 'John Smith', username: 'john.smith', password: 'jsmith123' },
        { id: 2, name: 'Emily Johnson', username: 'emily.j', password: 'ejohnson456' },
        { id: 3, name: 'Michael Williams', username: 'michael.w', password: 'mwill789' },
        { id: 4, name: 'Sarah Brown', username: 'sarah.b', password: 'sbrown012' }
    ]);

    // State to track which manager is being edited
    const [editingId, setEditingId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        username: '',
        password: ''
    });

    // Function to handle delete
    const handleDelete = (id) => {
        setManagers(managers.filter(manager => manager.id !== id));
    };

    // Function to handle edit click
    const handleEditClick = (manager) => {
        setEditingId(manager.id);
        setEditFormData({
            name: manager.name,
            username: manager.username,
            password: manager.password
        });
    };

    // Function to handle edit form change
    const handleEditFormChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData,
            [name]: value
        });
    };

    // Function to save edits
    const handleSaveClick = () => {
        const updatedManagers = managers.map(manager => {
            if (manager.id === editingId) {
                return { ...manager, ...editFormData };
            }
            return manager;
        });
        
        setManagers(updatedManagers);
        setEditingId(null);
    };

    // Function to cancel editing
    const handleCancelClick = () => {
        setEditingId(null);
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
                                    {editingId === manager.id ? (
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editFormData.name}
                                                    onChange={handleEditFormChange}
                                                    className="border rounded px-2 py-1"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    value={editFormData.username}
                                                    onChange={handleEditFormChange}
                                                    className="border rounded px-2 py-1"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    name="password"
                                                    value={editFormData.password}
                                                    onChange={handleEditFormChange}
                                                    className="border rounded px-2 py-1"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                                <button 
                                                    onClick={handleSaveClick}
                                                    className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded"
                                                >
                                                    Save
                                                </button>
                                                <button 
                                                    onClick={handleCancelClick}
                                                    className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-3 rounded"
                                                >
                                                    Cancel
                                                </button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{manager.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.username}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.password}</td>
                                            <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                                <button 
                                                    onClick={() => handleEditClick(manager)}
                                                    className="text-blue-500 hover:text-blue-700 py-1 px-3 rounded border border-blue-500"
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(manager.id)}
                                                    className=" ml-20 bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </>
                                    )}
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