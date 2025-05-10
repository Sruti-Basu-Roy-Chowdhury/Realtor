import { useState } from 'react';
import Dashboard from '../Components/Dashboard';

const Clients = () => {
  // Sample data for the table
  const clientsData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      status: 'active',
      joined: '2023-01-15',
      address: '123 Main St, City'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '234-567-8901',
      status: 'pending',
      joined: '2023-02-20',
      address: '456 Oak Ave, Town'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert@example.com',
      phone: '345-678-9012',
      status: 'inactive',
      joined: '2023-03-10',
      address: '789 Pine Rd, Village'
    },
  ];

  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
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

        {/* Clients table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-7 bg-blue-500 text-white p-4 font-medium">
            <div>Clients</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Status</div>
            <div>Joined</div>
            <div>Address</div>
            <div>Actions</div>
          </div>

          {/* Table body */}
          {clientsData.map((client) => (
            <div key={client.id} className="grid grid-cols-7 p-4 border-b border-gray-200 hover:bg-gray-50 items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                  <span className="text-xs">{client.name.charAt(0)}</span>
                </div>
                <span className="font-medium">{client.name}</span>
              </div>
              <div>{client.email}</div>
              <div>{client.phone}</div>
              <div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  client.status === 'active' ? 'bg-green-100 text-green-800' :
                  client.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {client.status}
                </span>
              </div>
              <div>{client.joined}</div>
              <div>{client.address}</div>
              <div>
                <button 
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                  onClick={() => handleViewDetails(client)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for client details */}
        {isModalOpen && selectedClient && (
          <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
              <div className="flex justify-between items-center border-b p-4">
                <h3 className="text-xl font-semibold">Client Details</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{selectedClient.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{selectedClient.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{selectedClient.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        selectedClient.status === 'active' ? 'bg-green-100 text-green-800' :
                        selectedClient.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {selectedClient.status}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Joined Date</p>
                    <p className="font-medium">{selectedClient.joined}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Client ID</p>
                    <p className="font-medium">{selectedClient.id}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">{selectedClient.address}</p>
                </div>
              </div>
              <div className="flex justify-end border-t p-4">
                <button 
                  onClick={closeModal}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;