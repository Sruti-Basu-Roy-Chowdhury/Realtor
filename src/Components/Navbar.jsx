import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
    const [isLeadDropdownOpen, setIsLeadDropdownOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex items-center">
                {/* Logo on the left */}
                <h1 className="text-2xl font-bold mr-auto font-[poppins]">AR Realtors</h1>
                
                {/* Centered navigation links */}
                <ul className="flex space-x-6 mx-auto items-center">
                    <li><Link to="/" className="hover:text-gray-300">Employee</Link></li>
                    <li><Link to="/manager" className="hover:text-gray-300">Manager</Link></li>
                    <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
                    
                    {/* Manage Leads Dropdown */}
                    <li className="relative">
                        <button
                            onClick={() => setIsLeadDropdownOpen(!isLeadDropdownOpen)}
                            className="hover:text-gray-300 flex items-center"
                        >
                            Manage Leads
                            <svg
                                className={`ml-1 h-4 w-4 transition-transform ${isLeadDropdownOpen ? 'transform rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {isLeadDropdownOpen && (
                            <div className="absolute z-10 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                                <Link
                                    to="/create-new-leads"
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    onClick={() => setIsLeadDropdownOpen(false)}
                                >
                                    Create New Leads
                                </Link>
                                <Link
                                    to="/unassigned-leads"
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    onClick={() => setIsLeadDropdownOpen(false)}
                                >
                                    Unassigned Leads
                                </Link>
                                <Link
                                    to="/reassigned-leads"
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    onClick={() => setIsLeadDropdownOpen(false)}
                                >
                                    Re-assigned Leads
                                </Link>
                            </div>
                        )}
                    </li>
                    
                    <li><Link to="/source" className="hover:text-gray-300">Source</Link></li>
                    <li><Link to="/properties" className="hover:text-gray-300">Properties</Link></li>
                    <li><Link to="/reports" className="hover:text-gray-300">Reports</Link></li>
                </ul>
                
                {/* Right side with email and profile image */}
                <div className="ml-auto flex items-center space-x-4">
                    <span className="text-sm">admin@arrealtor.in</span>
                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                        <img 
                            src="https://via.placeholder.com/32" 
                            alt="User profile" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/32";
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;