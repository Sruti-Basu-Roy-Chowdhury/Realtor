import Dashboard from '../Components/Dashboard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useState } from 'react';
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsHouseCheck } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const Analytics = () => {
    // Sample data for different time periods
    const monthlyData = [
        { month: 'JAN', value: 10 },
        { month: 'FEB', value: 15 },
        { month: 'MAR', value: 20 },
        { month: 'APR', value: 12 },
        { month: 'MAY', value: 18 },
        { month: 'JUNE', value: 22 }
    ];

    const yearlyData = [
        { year: '2018', value: 120 },
        { year: '2019', value: 150 },
        { year: '2020', value: 180 },
        { year: '2021', value: 210 },
        { year: '2022', value: 240 },
        { year: '2023', value: 270 }
    ];

    const fiveYearData = [
        { period: '2018-2023', residential: 500, commercial: 300, land: 200 },
        { period: '2013-2018', residential: 450, commercial: 250, land: 150 },
        { period: '2008-2013', residential: 400, commercial: 200, land: 100 }
    ];

    const [timePeriod, setTimePeriod] = useState('monthly');
    const [chartData, setChartData] = useState(monthlyData);

    const handleTimePeriodChange = (period) => {
        setTimePeriod(period);
        switch(period) {
            case 'monthly':
                setChartData(monthlyData);
                break;
            case 'yearly':
                setChartData(yearlyData);
                break;
            case 'fiveYear':
                setChartData(fiveYearData);
                break;
            default:
                setChartData(monthlyData);
        }
    };

    const renderChart = () => {
        switch(timePeriod) {
            case 'monthly':
                return (
                    <BarChart
                        width={730}
                        height={250}
                        data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#3b82f6" name="Properties Sold" />
                    </BarChart>
                );
            case 'yearly':
                return (
                    <BarChart
                        width={730}
                        height={250}
                        data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#10b981" name="Properties Sold" />
                    </BarChart>
                );
            case 'fiveYear':
                return (
                    <BarChart
                        width={730}
                        height={250}
                        data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="period" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="residential" fill="#3b82f6" name="Residential" />
                        <Bar dataKey="commercial" fill="#10b981" name="Commercial" />
                        <Bar dataKey="land" fill="#f59e0b" name="Land" />
                    </BarChart>
                );
            default:
                return null;
        }
    };

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
                        <svg className="w-5 h-5 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </div>
                </div>

                {/* Analytics Header */}
                <h1 className="text-2xl font-bold text-blue-500 mb-2">Real Estate Analytics</h1>
                <p className="text-gray-600 mb-8">Insights on listings, clients & sales</p>

                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-blue-100 rounded-lg shadow p-4 flex items-start">
                        <HiMiniUserGroup className="text-blue-500 text-xl mr-3 mt-6 " />
                        <div>
                            <h3 className="text-blue-500 text-sm mt-3">Registered Clients</h3>
                            <p className="text-2xl text-blue-500  font-bold">240+</p>
                        </div>
                    </div>
                    <div className="bg-green-100 rounded-lg shadow p-4 flex items-start">
                        <BsHouseCheck className="text-green-500 text-xl mr-3 mt-6" />
                        <div>
                            <h3 className="text-green-500 text-sm mt-3">Total Properties Listed</h3>
                            <p className="text-2xl font-bold text-green-500">120+</p>
                        </div>
                    </div>
                    <div className="bg-purple-100 rounded-lg shadow p-4 flex items-start">
                        <FaIndianRupeeSign className="text-purple-500 text-xl mr-3 mt-6" />
                        <div>
                            <h3 className="text-purple-500 text-sm mt-3">Revenue (Q1)</h3>
                            <p className="text-2xl font-bold text-purple-500">₹12.5L</p>
                        </div>
                    </div>
                    <div className="bg-yellow-100 rounded-lg shadow p-4 flex items-start">
                        <FaClock className="text-yellow-900 text-xl mr-3 mt-6" />
                        <div>
                            <h3 className="text-yellow-900 text-sm mt-3">Avg. Sale Time</h3>
                            <p className="text-2xl font-bold text-yellow-900">15 Days</p>
                        </div>
                    </div>
                </div>

                {/* Graph Section */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center mb-6">
                        <h2 className="text-lg font-semibold mr-4">Properties Sold</h2>
                        <div className="relative">
                            <select 
                                className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                                value={timePeriod}
                                onChange={(e) => handleTimePeriodChange(e.target.value)}
                            >
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                                <option value="fiveYear">Past 5 Years</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {renderChart()}
                </div>
            </div>
        </div>
    );
};

export default Analytics;