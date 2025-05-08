import React from 'react';
import Navbar from '../Components/Navbar';

const Properties = () => {
    // List of countries for the dropdown
    const countries = [
        "United States",
        "Canada",
        "United Kingdom",
        "Australia",
        "Germany",
        "France",
        "Japan",
        "India",
        "Brazil",
        "South Africa"
        // Add more countries as needed
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
           
            {/* Manage Sources section */}
            <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-blue-500 border-b border-gray-200 ">Add Properties Location</h2>
                </div>
                
                {/* Location input section */}
                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-medium mb-2">Location</label>
                    <div className="flex gap-2">
                        <select 
                            className="shadow appearance-none border rounded py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline w-[400px]"
                        >
                            <option value="">Select Your Location</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                            Add Location
                        </button>
                    </div>
                </div>
                
            </div>

            {/* Manage Sources section */}
            <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-blue-500 border-b border-gray-200">Add Name for a Location</h2>
                </div>
                
                {/* Combined Location and Name section in one row */}
                <div className="flex items-end gap-4 mb-4">
                    {/* Location section */}
                    <div className="flex-1">
                        <label className="block text-gray-400 text-sm font-medium mb-2">Location</label>
                        <div className="flex gap-2">
                            <select 
                                className="shadow appearance-none border rounded py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline w-[400px]"
                            >
                                <option value="">Select Your Location</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country}>{country}</option>
                                ))}
                            </select>

                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                            Add Location
                        </button>
                        </div>
                    </div>

                    {/* Name section */}
                    <div className="flex-1">
                        <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                        <div className="flex gap-2">
                            <input 
                                type="text" 
                                className="shadow appearance-none border rounded py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline w-[400px]"
                                placeholder="Enter name for location"
                            />
                        </div>
                    </div>

                    {/* Add button */}
                    <div className="flex items-end h-[42px] ">
                        <button className="-ml-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                            Add Name
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Properties;