import React, { useState } from "react";
import Dashboard from "../Components/Dashboard";
import { useNavigate } from 'react-router-dom';

const NewListing = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        status: 'available',
        type: 'apartment',
        image: ''
    });

    const [isSubmittable, setIsSubmittable] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Check if all required fields are filled
        const requiredFields = ['title', 'location', 'price', 'image'];
        const isFormValid = requiredFields.every(field => {
            if (field === 'image') return formData[field] !== '' || value !== '';
            return formData[field] !== '' || (name === field && value !== '');
        });
        
        setIsSubmittable(isFormValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isSubmittable) return;
        
        // Get existing properties from localStorage or initialize empty array
        const existingProperties = JSON.parse(localStorage.getItem('properties')) || [];
        
        // Create new property object
        const newProperty = {
            id: Date.now(), // Using timestamp as unique ID
            title: formData.title,
            location: formData.location,
            price: formData.price,
            status: formData.status.charAt(0).toUpperCase() + formData.status.slice(1),
            type: formData.type.charAt(0).toUpperCase() + formData.type.slice(1),
            image: formData.image
        };
        
        // Add new property to the array
        const updatedProperties = [...existingProperties, newProperty];
        
        // Save back to localStorage
        localStorage.setItem('properties', JSON.stringify(updatedProperties));
        
        // Navigate back to ViewListing
        navigate('/dashboard/listing');
    };

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
                    <form onSubmit={handleSubmit}>
                        {/* First row of inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Property Title*</label>
                                <input 
                                    type="text" 
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter property title"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
                                <input 
                                    type="text" 
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter location"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price*</label>
                                <input 
                                    type="text" 
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter price"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status*</label>
                                <select 
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="available">Available</option>
                                    <option value="sold">Sold</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                        </div>

                        {/* Type dropdown */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Type*</label>
                            <select 
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa</option>
                                <option value="commercial">Commercial</option>
                            </select>
                        </div>

                        {/* Image URL input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL*</label>
                            <input 
                                type="text" 
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>

                        {/* Submit button */}
                        <button 
                            type="submit" 
                            className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                isSubmittable 
                                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!isSubmittable}
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