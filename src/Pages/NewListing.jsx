import React from "react";
import Dashboard from "../Components/Dashboard";

const NewListing = () => {
    return (
        <div className="flex">
            <Dashboard />
            <div className="flex-1 p-6">
                {/* Top section with user info and add button */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center mt-5">
                        <h1 className="text-2xl font-bold">Add New Listing</h1>
                    </div>
                </div>

                {/* Form with white background */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <form>
                        {/* First row of inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Property Title</label>
                                <input 
                                    type="text" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter property title"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <input 
                                    type="text" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter location"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                <input 
                                    type="text" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter price"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="available">Available</option>
                                    <option value="sold">Sold</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                        </div>

                        {/* Type dropdown */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                            <select 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa</option>
                                <option value="commercial">Commercial</option>
                            </select>
                        </div>

                        {/* Image URL input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input 
                                type="text" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter image URL"
                            />
                        </div>

                        {/* Submit button */}
                        <button 
                            type="submit" 
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewListing;