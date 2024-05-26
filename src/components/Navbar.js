import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md  w-[100%] " >
      <div className="container mx-auto px-[10%] py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-xl font-bold"><span className='text-yellow-500'>Mangal</span>Bazar</div>
        </div>
        <div className="hidden md:flex items-center space-x-6 ">
          <a href="#" className="text-gray-800 hover:text-black hover:font-bold hover:border-b-2">Venues</a>
          <a href="#" className="text-gray-800 hover:text-black hover:font-bold hover:border-b-2">Vendors</a>
          <a href="#" className="text-gray-800 hover:text-black hover:font-bold hover:border-b-2 ">Blog</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <input type="text" placeholder="Search" className="border p-2 rounded" />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Login</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block text-gray-800 py-2">Venues</a>
          <a href="#" className="block text-gray-800 py-2">Vendors</a>
          <a href="#" className="block text-gray-800 py-2">Blog</a>
          <div className="flex items-center space-x-4 mt-4">
            <input type="text" placeholder="Search" className="border p-2 rounded w-full" />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded w-full">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
