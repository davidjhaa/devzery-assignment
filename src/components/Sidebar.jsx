import React from 'react';
import logo from '../../public/assets/d_logo.png'
import { FiGrid, FiClipboard, FiSettings, FiLogOut, FiZap, FiFlag } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="h-screen w-56 bg-gray-900 text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center px-6 py-6 gap-3">
            <img src={logo} alt='logo' className='bg-transparent w-7'/>
          <div className="text-white text-xl font-bold">Devzery</div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10">
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-pink-500 bg-gray-800 rounded-lg">
                <FiGrid className="mr-3" /> Test Suite
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-800 rounded-lg">
                <FiClipboard className="mr-3" /> API Overview
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-800 rounded-lg">
                <FiFlag className="mr-3" /> Bug Tracker
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-800 rounded-lg">
                <FiZap className="mr-3" /> Integration
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-800 rounded-lg">
                <FiSettings className="mr-3" /> Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Section: Logout Button */}
      <div className="px-6 py-6">
        <button className="flex items-center w-full px-6 py-3 hover:bg-gray-800 rounded-lg">
          <FiLogOut className="mr-3" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
