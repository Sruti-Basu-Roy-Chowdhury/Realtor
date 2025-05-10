import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
    // Sample data for the table with unique values
    const initialEmployeesData = [
        { id: 1, name: "John Smith", username: "john.smith", password: "jsmith@123", designation: "Sales Executive", allLead: 25, visited: 15, application: 8, mayVisit: 5, closed: 3 },
        { id: 2, name: "Sarah Johnson", username: "sarah.j", password: "sarah#2023", designation: "Senior Sales", allLead: 32, visited: 22, application: 12, mayVisit: 8, closed: 5 },
        { id: 3, name: "Michael Brown", username: "mike.brown", password: "mikeB!456", designation: "Team Lead", allLead: 45, visited: 30, application: 18, mayVisit: 10, closed: 7 },
        { id: 4, name: "Emily Davis", username: "emily.d", password: "davis$789", designation: "Sales Executive", allLead: 28, visited: 18, application: 9, mayVisit: 6, closed: 4 },
        { id: 5, name: "Robert Wilson", username: "rob.wilson", password: "wilsonR*321", designation: "Area Manager", allLead: 60, visited: 45, application: 25, mayVisit: 15, closed: 10 },
        { id: 6, name: "Jennifer Lee", username: "jen.lee", password: "leeJ@654", designation: "Sales Executive", allLead: 22, visited: 14, application: 7, mayVisit: 4, closed: 2 },
        { id: 7, name: "David Miller", username: "david.m", password: "davidM%987", designation: "Senior Sales", allLead: 38, visited: 25, application: 14, mayVisit: 9, closed: 6 },
        { id: 8, name: "Jessica Taylor", username: "jess.t", password: "taylorJ!135", designation: "Sales Executive", allLead: 26, visited: 16, application: 8, mayVisit: 5, closed: 3 },
        { id: 9, name: "Daniel Anderson", username: "dan.a", password: "andersonD$246", designation: "Team Lead", allLead: 50, visited: 35, application: 20, mayVisit: 12, closed: 8 },
        { id: 10, name: "Lisa Martinez", username: "lisa.m", password: "martinezL*864", designation: "Sales Executive", allLead: 24, visited: 15, application: 7, mayVisit: 4, closed: 2 }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [employees, setEmployees] = useState(initialEmployeesData);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editFormData, setEditFormData] = useState({});
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        
        const filtered = initialEmployeesData.filter(emp => 
            emp.name.toLowerCase().includes(term) || 
            emp.username.toLowerCase().includes(term) ||
            emp.designation.toLowerCase().includes(term)
        );
        
        setEmployees(filtered);
    };

    const toggleDropdown = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    const handleEdit = (id) => {
        setEditingId(id);
        const employeeToEdit = employees.find(emp => emp.id === id);
        setEditFormData(employeeToEdit);
        setActiveDropdown(null);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditFormData({});
    };

    const handleSaveEdit = (id) => {
        const updatedEmployees = employees.map(emp => 
            emp.id === id ? { ...editFormData } : emp
        );
        setEmployees(updatedEmployees);
        setEditingId(null);
        setEditFormData({});
    };

    const handleEditFormChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData,
            [name]: value
        });
    };

    const handleDelete = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
        setActiveDropdown(null);
    };

    const handleReview = (id) => {
        navigate(`/employee/review/${id}`);
        setActiveDropdown(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            
            {/* Header section */}
            <div className="flex justify-between items-center bg-white rounded-lg shadow-md m-4 p-4">
                <h1 className="text-2xl font-bold text-blue-500">Manage Employee</h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    View Ex-Employee
                </button>
            </div>
            
            {/* Search bar section */}
            <div className="p-4 flex justify-end">
                <div className="relative w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Search employees..."
                    />
                </div>
            </div>
            
            {/* Table section */}
            <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">All lead</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visited</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mayvisit</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Closed</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    {editingId === employee.id ? (
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editFormData.name || ''}
                                                    onChange={handleEditFormChange}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    value={editFormData.username || ''}
                                                    onChange={handleEditFormChange}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    name="password"
                                                    value={editFormData.password || ''}
                                                    onChange={handleEditFormChange}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    name="designation"
                                                    value={editFormData.designation || ''}
                                                    onChange={handleEditFormChange}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="number"
                                                    name="allLead"
                                                    value={editFormData.allLead || ''}
                                                    onChange={handleEditFormChange}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="number"
                                                    name="visited"
                                                    value={editFormData.visited || ''}
                                                    onChange={handleEditFormChange}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="number"
                                                    name="application"
                                                    value={editFormData.application || ''}
                                                    onChange={handleEditFormChange}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="number"
                                                    name="mayVisit"
                                                    value={editFormData.mayVisit || ''}
                                                    onChange={handleEditFormChange}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="number"
                                                    name="closed"
                                                    value={editFormData.closed || ''}
                                                    onChange={handleEditFormChange}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                                                <button 
                                                    onClick={() => handleSaveEdit(employee.id)}
                                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                                                >
                                                    Save
                                                </button>
                                                <button 
                                                    onClick={handleCancelEdit}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                                >
                                                    Cancel
                                                </button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.username}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.password}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.designation}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.allLead}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.visited}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.application}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.mayVisit}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.closed}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
                                                <button 
                                                    onClick={() => toggleDropdown(employee.id)}
                                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                    </svg>
                                                </button>
                                                
                                                {activeDropdown === employee.id && (
                                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                            <button 
                                                                onClick={() => handleEdit(employee.id)}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                                                role="menuitem"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button 
                                                                onClick={() => handleDelete(employee.id)}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                                                role="menuitem"
                                                            >
                                                                Delete
                                                            </button>
                                                            <button 
                                                                onClick={() => handleReview(employee.id)}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                                                role="menuitem"
                                                            >
                                                                Review
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

export default Employee;