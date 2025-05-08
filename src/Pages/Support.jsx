import React from "react";
import Dashboard from "../Components/Dashboard";

const Support = () => {
    // Sample ticket data with updated status colors and issue descriptions
    const tickets = [
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
    ];

    const handleViewDetails = (ticketId) => {
        console.log(`Viewing details for ticket ${ticketId}`);
        alert(`Viewing details for ticket ${ticketId}`);
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

                {/* Property Listings section */}
                <div className="flex justify-between items-start mb-6 mt-10">
                    <div>
                        <h2 className="text-xl font-semibold">Support Center</h2>
                        <p className="text-gray-600 text-sm">
                            Handle and resolve support requests raised by property clients
                        </p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
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
                            
                            {/* Added issue description paragraph */}
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
            </div>
        </div>
    );
};

export default Support;