import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const Source = () => {
    const [sources, setSources] = useState([
        { id: 1, name: '99 Acres', leads: 6097 },
        { id: 2, name: 'FB', leads: 324 },
        { id: 3, name: 'Google', leads: 49 },
        { id: 4, name: 'Housing.com', leads: 22 },
        { id: 5, name: 'Insta', leads: 212 }
    ]);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        leads: ''
    });
    const [showAddModal, setShowAddModal] = useState(false);
    const [newSource, setNewSource] = useState({
        name: '',
        leads: ''
    });

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const handleDelete = (id) => {
        setSources(sources.filter(source => source.id !== id));
        setOpenDropdown(null);
    };

    const handleEdit = (source) => {
        setEditingId(source.id);
        setEditFormData({
            name: source.name,
            leads: source.leads
        });
        setOpenDropdown(null);
    };

    const handleEditFormChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData,
            [name]: name === 'leads' ? parseInt(value) || 0 : value
        });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleSaveEdit = (id) => {
        const updatedSources = sources.map(source => {
            if (source.id === id) {
                return { ...source, ...editFormData };
            }
            return source;
        });
        setSources(updatedSources);
        setEditingId(null);
    };

    const handleAddSource = () => {
        setShowAddModal(true);
    };

    const handleNewSourceChange = (e) => {
        const { name, value } = e.target;
        setNewSource({
            ...newSource,
            [name]: name === 'leads' ? parseInt(value) || 0 : value
        });
    };

    const handleSubmitNewSource = (e) => {
        e.preventDefault();
        const newId = Math.max(...sources.map(s => s.id), 0) + 1;
        setSources([...sources, {
            id: newId,
            name: newSource.name,
            leads: newSource.leads
        }]);
        setNewSource({ name: '', leads: '' });
        setShowAddModal(false);
    };

    const handleCloseModal = () => {
        setShowAddModal(false);
        setNewSource({ name: '', leads: '' });
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="flex justify-between items-center bg-white rounded-lg shadow-md m-4 p-4">
                <h1 className="text-2xl font-bold text-blue-500">Add Sources</h1>
                <button 
                    onClick={handleAddSource}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                    Add Source
                </button>
            </div>

            {/* Add Source Modal */}
            {showAddModal && (
                <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-blue-500">Add New Source</h2>
                            <button 
                                onClick={handleCloseModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <form onSubmit={handleSubmitNewSource}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Source Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={newSource.name}
                                    onChange={handleNewSourceChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leads">
                                    Number of Leads
                                </label>
                                <input
                                    type="number"
                                    id="leads"
                                    name="leads"
                                    value={newSource.leads}
                                    onChange={handleNewSourceChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Add Source
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

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
                                    {editingId === source.id ? (
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editFormData.name}
                                                    onChange={handleEditFormChange}
                                                    className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="number"
                                                    name="leads"
                                                    value={editFormData.leads}
                                                    onChange={handleEditFormChange}
                                                    className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                                                <button
                                                    onClick={() => handleSaveEdit(source.id)}
                                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={handleCancelEdit}
                                                    className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm"
                                                >
                                                    Cancel
                                                </button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
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
                                                                onClick={() => handleEdit(source)}
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
                                                        </div>
                                                    </div>
                                                )}
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

export default Source;