import React from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between p-4 items-center '>
      <div className=' flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu className='text-2xl sm:text-3xl lg:text-4xl' />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Taste</span>{' '}
        </h1>
        <div className='font-bold hidden lg:flex  items-center bg-gray-200 rounded-full p-0 text-[14px]'>
          <p className='bg-black text-white rounded-full  p-2'>Delivery</p>
          <p className='text-black   p-2'>Pickup</p>{' '}
        </div>
      </div>
      <div className='bg-gray-200 rounded-full px-2 flex items-center w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch className='text-2xl sm:text-3xl lg:text-4xl' />
        <input
          type='text'
          className='bg-transparent p-2 outline-none w-full placeholder:text-gray-500'
          placeholder='Search Food'
        />
      </div>
      <button className='hidden font-bold  bg-black text-white md:flex items-center py-2 space-x-2 hover:text-black hover:bg-white hover:ring-1 hover:ring-black hover:drop-shadow-md transition-all duration-200 rounded-full'>
        {' '}
        <BsCart4 className='text-xl font-bold' /> <span>Cart</span>
      </button>
    </div>
  );
};

export default Navbar;
