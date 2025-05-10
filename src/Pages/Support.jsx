import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Components/Dashboard";

const Support = () => {
    const navigate = useNavigate();
    const [showCreateTicketModal, setShowCreateTicketModal] = useState(false);
    const [newTicket, setNewTicket] = useState({
        userName: "",
        issue: "",
        priority: "Medium"
    });
    const [tickets, setTickets] = useState([
        {
            id: "TCK-1001",
            userName: "John Doe",
            date: "2024-04-10",
            status: "Open",
            statusColor: "bg-red-100 text-red-800",
            userInitial: "J",
            issue: "Unable to schedule a property visit"
        },
        {
            id: "TCK-1002",
            userName: "Alice Smith",
            date: "2024-04-09",
            status: "In Progress",
            statusColor: "bg-blue-100 text-blue-800",
            userInitial: "A",
            issue: "Didn't receive confirmation email"
        },
        {
            id: "TCK-1003",
            userName: "Bob Johnson",
            date: "2024-04-08",
            status: "Resolved",
            statusColor: "bg-green-100 text-green-800",
            userInitial: "B",
            issue: "Need help with documentation process"
        },
        {
            id: "TCK-1004",
            userName: "Emma Wilson",
            date: "2024-04-07",
            status: "Open",
            statusColor: "bg-red-100 text-red-800",
            userInitial: "E",
            issue: "Account login issue"
        }
    ]);

    const handleViewDetails = (ticketId) => {
        console.log(`Viewing details for ticket ${ticketId}`);
        alert(`Viewing details for ticket ${ticketId}`);
    };

    const handleCreateTicketClick = () => {
        setShowCreateTicketModal(true);
    };

    const handleCloseModal = () => {
        setShowCreateTicketModal(false);
        setNewTicket({
            userName: "",
            issue: "",
            priority: "Medium"
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTicket(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmitTicket = (e) => {
        e.preventDefault();
        
        // Generate a new ticket ID
        const lastId = tickets.length > 0 ? parseInt(tickets[0].id.split('-')[1]) : 1000;
        const newId = `TCK-${lastId + 1}`;
        
        // Get current date in YYYY-MM-DD format
        const today = new Date();
        const date = today.toISOString().split('T')[0];
        
        // Create new ticket object
        const ticketToAdd = {
            id: newId,
            userName: newTicket.userName,
            date: date,
            status: "Open",
            statusColor: "bg-red-100 text-red-800",
            userInitial: newTicket.userName.charAt(0).toUpperCase(),
            issue: newTicket.issue,
            priority: newTicket.priority
        };
        
        // Add the new ticket to the beginning of the tickets array
        setTickets(prevTickets => [ticketToAdd, ...prevTickets]);
        
        // Close the modal and reset the form
        handleCloseModal();
        alert(`Ticket created for ${newTicket.userName}`);
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
                        <svg
                            className="w-5 h-5 cursor-pointer"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </div>
                </div>

                {/* Support Center section */}
                <div className="flex justify-between items-start mb-6 mt-10">
                    <div>
                        <h2 className="text-xl font-semibold">Support Center</h2>
                        <p className="text-gray-600 text-sm">
                            Handle and resolve support requests raised by property clients
                        </p>
                    </div>
                    <button 
                        onClick={handleCreateTicketClick}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        + Create Ticket
                    </button>
                </div>

                {/* Ticket cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tickets.map((ticket) => (
                        <div key={ticket.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                                        <span className="text-sm">{ticket.userInitial}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{ticket.userName}</h3>
                                        <p className="text-gray-600 text-sm">{ticket.date}</p>
                                    </div>
                                </div>
                                <span className="font-semibold text-gray-700">#{ticket.id}</span>
                            </div>
                            
                            <p className="mt-3 text-gray-700 pl-13">
                                {ticket.issue}
                            </p>
                            
                            <div className="flex justify-between items-end mt-4">
                                <div>
                                    <span className={`${ticket.statusColor} text-xs px-2 py-1 rounded-full`}>
                                        {ticket.status}
                                    </span>
                                </div>
                                <button 
                                    onClick={() => handleViewDetails(ticket.id)}
                                    className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Create Ticket Modal */}
                {showCreateTicketModal && (
                    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Create New Ticket</h3>
                                <button 
                                    onClick={handleCloseModal}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <form onSubmit={handleSubmitTicket}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="userName">
                                        Client Name
                                    </label>
                                    <input
                                        type="text"
                                        id="userName"
                                        name="userName"
                                        value={newTicket.userName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="issue">
                                        Issue Description
                                    </label>
                                    <textarea
                                        id="issue"
                                        name="issue"
                                        value={newTicket.issue}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    ></textarea>
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="priority">
                                        Priority
                                    </label>
                                    <select
                                        id="priority"
                                        name="priority"
                                        value={newTicket.priority}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </select>
                                </div>
                                
                                <div className="flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    >
                                        Create Ticket
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Support;