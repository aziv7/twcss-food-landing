import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';

import { FaWallet, FaBoxes } from 'react-icons/fa';
import { IoPricetags } from 'react-icons/io5';
import { IoMdCloseCircle, IoMdHelpCircle } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between p-4 items-center '>
      <div className=' flex items-center'>
        <div className='cursor-pointer' onClick={() => setOpen(!open)}>
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

      <div
        className={`${
          open === true
            ? 'bg-black/80 fixed w-full h-screen z-10 top-0 left-0'
            : 'opacity-0'
        }`}></div>

      <div
        className={`${
          open === true
            ? 'fixed top-0 z-20 left-0 w-[300px] h-screen bg-white duration-300'
            : 'fixed top-0 z-20 left-[-300px] w-[300px] h-screen bg-white duration-300'
        }`}>
        <IoMdCloseCircle
          onClick={() => setOpen(!open)}
          className='absolute right-4 top-4 transition-all cursor-pointer duration-200 hover:text-red-500 text-3xl'
        />

        <h1 className='text-2xl  p-4'>
          Best <span className='font-bold'>Taste</span>{' '}
        </h1>
        <nav>
          <ul className='flex flex-col p-4 cursor-pointer text-gray-800'>
            <li className='transition-all duration-300 hover:translate-x-6 text-xl py-4 flex items-center space-x-4'>
              <TbTruckDelivery size={25} />
              <span>Orders</span>
            </li>
            <li className='transition-all duration-300 hover:translate-x-6 text-xl py-4 flex items-center space-x-4'>
              <MdFavorite size={25} />
              <span>Favorites</span>
            </li>
            <li className='transition-all duration-300 hover:translate-x-6 text-xl py-4 flex items-center space-x-4'>
              <FaWallet size={25} />
              <span>Wallet</span>
            </li>
            <li className='transition-all duration-300 hover:translate-x-6 text-xl py-4 flex items-center space-x-4'>
              <IoMdHelpCircle size={25} />
              <span>Help</span>
            </li>
            <li className='transition-all duration-300 hover:translate-x-6 text-xl py-4 flex items-center space-x-4'>
              <IoPricetags size={25} />
              <span>Promotions</span>
            </li>
            <li className='transition-all duration-300 hover:translate-x-6 text-xl py-4 flex items-center space-x-4'>
              <FaBoxes size={25} />
              <span>Best One</span>
            </li>
            <li className='transition-all duration-300 hover:translate-x-6 text-xl py-4 flex items-center space-x-4'>
              <HiUsers size={25} />
              <span>Invite Friends</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
