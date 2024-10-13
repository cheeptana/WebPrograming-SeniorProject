import React from 'react';

export default function Staff(){
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Staff Dashboard</h1>
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Manage Products
        </button>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Manage Promotions
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">Product List</h2>
          <ul className="list-none mb-4">
            <li className="py-2 border-b border-gray-200">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Product 1
              </a>
            </li>
            <li className="py-2 border-b border-gray-200">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Product 2
              </a>
            </li>
            <li className="py-2 border-b border-gray-200">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Product 3
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">Promotion List</h2>
          <ul className="list-none mb-4">
            <li className="py-2 border-b border-gray-200">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Promotion 1
              </a>
            </li>
            <li className="py-2 border-b border-gray-200">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Promotion 2
              </a>
            </li>
            <li className="py-2 border-b border-gray-200">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Promotion 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

