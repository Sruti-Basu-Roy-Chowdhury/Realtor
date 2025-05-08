import React, { useState } from "react";
import Dashboard from "../Components/Dashboard";
//import propertyImage1 from "../assets/images/image1.jpg";
//import propertyImage2 from "../assets/images/image2.jpg";
//import propertyImage3 from "../assets/images/image3.jpg";
import { useNavigate } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import images from "../assets/images"; // Assuming you have an index.js file exporting all images
import { Link } from "react-router-dom";

const ViewListing = () => {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([
        {
            id: 1,
            title: "2BHK Flat in Salt Lake Sector V",
            location: "Salt Lake, Kolkata",
            price: "₹65 Lakh",
            status: "Available",
            type: "Apartment",
            image: images.propertyImage1
        },
        {
            id: 2,
            title: "2BHK Flat in Salt Lake Sector V",
            location: "Salt Lake, Kolkata",
            price: "₹65 Lakh",
            status: "Pending",
            type: "Villa",
            image: images.propertyImage2
        },
        {
            id: 3,
            title: "2BHK Flat in Salt Lake Sector V",
            location: "Salt Lake, Kolkata",
            price: "₹65 Lakh",
            status: "Sold",
            type: "Commercial",
            image: images.propertyImage3
        }
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editedProperty, setEditedProperty] = useState({});

    const handleEdit = (id) => {
        setEditingId(id);
        const propertyToEdit = properties.find(property => property.id === id);
        setEditedProperty({ ...propertyToEdit });
    };

    const handleSave = (id) => {
        setProperties(properties.map(property => 
            property.id === id ? editedProperty : property
        ));
        setEditingId(null);
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProperty(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedProperty(prev => ({
                    ...prev,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            setProperties(properties.filter(property => property.id !== id));
        }
    };

    const statusColors = {
        Available: "bg-green-100 text-green-800",
        Pending: "bg-yellow-100 text-yellow-800",
        Sold: "bg-red-100 text-red-800"
    };

    return (
        <div className="flex">
            <Dashboard />
            <div className="flex-1 p-6">
                {/* Top section with user info and add button */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center mt-5">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                            <span className="text-sm">U</span>
                        </div>
                        <span className="font-medium mr-3">Admin</span>
                        <svg className="w-5 h-5 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </div>
                </div>

                {/* Property Listings section */}
                <div className="flex justify-between items-start mb-6 mt-10">
                    <div>
                        <h2 className="text-xl font-semibold">Property Listings</h2>
                        <p className="text-gray-600 text-sm">Manage all active and archived listings from clients or agency</p>
                    </div>
                    <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        onClick={() => navigate('/new-listing')}
                    >
                        + Add New Listing
                    </button>
                </div>

                {/* Property Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {properties.map(property => (
                        <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="h-40 bg-gray-200 overflow-hidden">
                                {editingId === property.id ? (
                                    <div className="p-2">
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            onChange={handleImageChange}
                                            className="w-full text-sm"
                                        />
                                    </div>
                                ) : (
                                    <img src={property.image} alt="Property" className="w-full h-full object-cover" />
                                )}
                            </div>
                            <div className="p-4">
                                {editingId === property.id ? (
                                    <>
                                        <input
                                            type="text"
                                            name="title"
                                            value={editedProperty.title}
                                            onChange={handleChange}
                                            className="w-full p-1 mb-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            name="location"
                                            value={editedProperty.location}
                                            onChange={handleChange}
                                            className="w-full p-1 mb-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            name="price"
                                            value={editedProperty.price}
                                            onChange={handleChange}
                                            className="w-full p-1 mb-2 border rounded"
                                        />
                                        <div className="flex justify-between items-center mt-3">
                                            <select
                                                name="status"
                                                value={editedProperty.status}
                                                onChange={handleChange}
                                                className="p-1 border rounded"
                                            >
                                                <option value="Available">Available</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Sold">Sold</option>
                                            </select>
                                            <input
                                                type="text"
                                                name="type"
                                                value={editedProperty.type}
                                                onChange={handleChange}
                                                className="p-1 border rounded"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="font-semibold text-lg">{property.title}</h3>
                                        <p className="text-gray-600 text-sm">{property.location}</p>
                                        <p className="font-bold mt-2">{property.price}</p>
                                        <div className="flex justify-between items-center mt-3">
                                            <div className="flex space-x-2">
                                                <span className={`${statusColors[property.status]} text-xs px-2 py-1 rounded-full`}>
                                                    {property.status}
                                                </span>
                                            </div>
                                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                                {property.type}
                                            </span>
                                        </div>
                                    </>
                                )}
                                <div className="flex justify-between mt-4 pt-3">
                                    {editingId === property.id ? (
                                        <>
                                            <button 
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                                onClick={() => handleSave(property.id)}
                                            >
                                                Save
                                            </button>
                                            <button 
                                                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button 
                                                className="flex items-center text-blue-500 hover:text-blue-700 text-sm gap-1"
                                                onClick={() => navigate(`/property/${property.id}`)}
                                            >
                                                <FaEye /> View
                                            </button>
                                            <button 
                                                className="flex items-center text-yellow-500 hover:text-yellow-700 text-sm gap-1"
                                                onClick={() => handleEdit(property.id)}
                                            >
                                                <FiEdit /> Edit
                                            </button>
                                            <button 
                                                className="flex items-center text-red-500 hover:text-red-700 text-sm gap-1"
                                                onClick={() => handleDelete(property.id)}
                                            >
                                                <MdDeleteOutline /> Delete
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewListing;