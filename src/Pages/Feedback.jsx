import React from "react";
import Dashboard from "../Components/Dashboard";

const Feedback = () => {
    return (
        <div className="flex">
            <Dashboard />
            <div className="flex-1 p-6">
                {/* Top section with user info and add button */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
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

                {/* Feedback Section */}
                <div className="mb-8">
                    <h2 className="text-blue-600 text-2xl font-bold mb-2">Client Feedback</h2>
                    <p className="text-gray-600 mb-6">See what your clients are saying about your service</p>
                    
                    {/* Feedback Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white mr-3">
                                    <span className="text-sm">R</span>
                                </div>
                                <div>
                                    <p className="font-medium">Ravi Sharma</p>
                                    <p className="text-sm text-gray-500">2024-04-10</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-black text-left">Excellent support throughout the property buying journey!</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white mr-3">
                                    <span className="text-sm">P</span>
                                </div>
                                <div>
                                    <p className="font-medium">Priya Patel</p>
                                    <p className="text-sm text-gray-500">2024-04-05</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-black text-left">Very professional and responsive team. Highly recommended!</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white mr-3">
                                    <span className="text-sm">A</span>
                                </div>
                                <div>
                                    <p className="font-medium">Amit Singh</p>
                                    <p className="text-sm text-gray-500">2024-03-28</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(4)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p className="text-black text-left">Good service overall, but had some communication delays.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white mr-3">
                                    <span className="text-sm">N</span>
                                </div>
                                <div>
                                    <p className="font-medium">Neha Gupta</p>
                                    <p className="text-sm text-gray-500">2024-03-15</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-black text-left">Exceptional service! They found me my dream home within budget.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;