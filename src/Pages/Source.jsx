import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const Source = () => {
    const navigate = useNavigate();
    const [sources, setSources] = useState([
        { id: 1, name: '99 Acres', leads: 6097 },
        { id: 2, name: 'FB', leads: 324 },
        { id: 3, name: 'Google', leads: 49 },
        { id: 4, name: 'Housing.com', leads: 22 },
        { id: 5, name: 'Insta', leads: 212 }
    ]);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const handleDelete = (id) => {
        setSources(sources.filter(source => source.id !== id));
        setOpenDropdown(null);
    };

    const handleEdit = (id) => {
        navigate(`/edit-source/${id}`);
        setOpenDropdown(null);
    };

    const handleReview = (id) => {
        navigate(`/review-source/${id}`);
        setOpenDropdown(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="flex justify-between items-center bg-white rounded-lg shadow-md m-4 p-4">
                <h1 className="text-2xl font-bold text-blue-500">Add Sources</h1>
            </div>
            
            {/* Search bar section */}
            <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <p className="text-gray-700 mb-2">Search Name</p>
                <div className="flex items-center">
                    <input 
                        type="text" 
                        placeholder="Enter name to search..."
                        className="border border-gray-300 rounded-l-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-r-md transition duration-200"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {/* Manage Sources section */}
            <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-blue-500">Manage Sources</h2>
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-2">Search:</span>
                        <input 
                            type="text" 
                            placeholder="Search sources..."
                            className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                
                {/* Sources table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Leads</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sources.map((source) => (
                                <tr key={source.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{source.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{source.leads}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
                                        <button 
                                            className="text-gray-400 hover:text-gray-600"
                                            onClick={() => toggleDropdown(source.id)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        
                                        {openDropdown === source.id && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                                <div className="py-1">
                                                    <button 
                                                        onClick={() => handleEdit(source.id)}
                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDelete(source.id)}
                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button 
                                                        onClick={() => handleReview(source.id)}
                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Review
                                                    </button>
                                                </div>
                                            </div>
                                        )}
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

export default Source;