import React from "react";

export default function AdminHome () {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Account Management</h1>
      <div className="flex justify-between mb-4">
        <input
          type="search"
          placeholder="Search for an account"
          className="w-full p-2 pl-10 text-sm text-gray-700"
        />
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Create New Account
        </button>
      </div>
      <ul className="list-none mb-4">
        <li className="py-2 border-b border-gray-200">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            John Doe
          </a>
        </li>
        <li className="py-2 border-b border-gray-200">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Jane Doe
          </a>
        </li>
        <li className="py-2 border-b border-gray-200">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Bob Smith
          </a>
        </li>
      </ul>
    </div>
  );
};
