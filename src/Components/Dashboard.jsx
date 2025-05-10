import React, { useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { HiMiniUserGroup } from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { FaEye } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeOption, setActiveOption] = useState('');

    // Determine active option based on current route
    React.useEffect(() => {
        const path = location.pathname;
        if (path.includes('analytics')) setActiveOption('Analytics');
        else if (path.includes('feedback')) setActiveOption('Feedback');
        else if (path.includes('listing')) setActiveOption('View Listing');
        else if (path.includes('support')) setActiveOption('Support');
        else setActiveOption('Clients');
    }, [location]);

    const handleOptionClick = (option) => {
        setActiveOption(option);
        switch(option) {
            case 'Clients':
                navigate('/dashboard');
                break;
            case 'Analytics':
                navigate('/dashboard/analytics');
                break;
            case 'Feedback':
                navigate('/dashboard/feedback');
                break;
            case 'View Listing':
                navigate('/dashboard/listing');
                break;
            case 'Support':
                navigate('/dashboard/support');
                break;
            default:
                navigate('/dashboard');
                break;
        }
    };

    const handleDashboardClick = () => {
        navigate('/'); // or any other route you want to navigate to
        setActiveOption('Clients'); // or whatever default option you want
    };

    const getIconForOption = (option) => {
        switch(option) {
            case 'Clients':
                return <HiMiniUserGroup className="mr-2" />;
            case 'Analytics':
                return <SiGoogleanalytics className="mr-2" />;
            case 'Feedback':
                return <AiFillMessage className="mr-2" />;
            case 'View Listing':
                return <FaEye className="mr-2" />;
            case 'Support':
                return <BsFillTelephoneFill className="mr-2" />;
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar - fixed on the left with shadow and rounded corners */}
            <div className="w-64 h-full bg-white p-4 fixed left-0 top-5 shadow-lg rounded-r-xl">
                <div 
                    className="mb-6 bg-blue-500 rounded-lg p-4 hover:bg-blue-600 cursor-pointer transition-colors"
                    onClick={handleDashboardClick}
                >
                    <h2 className="text-xl font-bold text-white">Dashboard</h2>
                </div>
                <ul className="space-y-2 mt-10">
                    {['Clients', 'Analytics', 'Feedback', 'View Listing', 'Support'].map((option) => (
                        <li 
                            key={option}
                            className={`flex items-center p-2 hover:bg-blue-50 cursor-pointer rounded mt-5 transition-colors ${
                                activeOption === option 
                                    ? 'bg-blue-500 text-white' 
                                    : ''
                            }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {getIconForOption(option)}
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Main content area */}
            <div className="flex-1 ml-64 p-4">
                <Outlet /> {/* This will render the nested routes */}
            </div>
        </div>
    );
};

export default Dashboard;