'use client';

import { Bell, Menu, Settings, Sun } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-7'>
      {/* LeftSide */}
      <div className='flex justify-between items-center gap-5'>
        <button
          className='p-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={() => {}}
        >
          <Menu className='size-4' />
        </button>

        <div className='relative'>
          <input
            type='search'
            placeholder='Começe a digitar para busscar produtos'
            className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Bell className='text-gray-500 size-5' />
          </div>
        </div>
      </div>
      {/* RightSide */}
      <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-5'>
          <button onClick={() => {}}>
            <Sun className='text-gray-500 size-6' />
          </button>
          <div className='relative'>
            <Bell className='size-6 text-gray-500' />
            <span className='absolute -top-2 -right-2 inline-flex items-center justify-center bg-red-500 px-[0.4rem] py-1 rounded-full text-red-100 text-xs font-semibold leading-none'>
              2
            </span>
          </div>
          <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3' />
          <div className='flex items-center gap-3 cursor-pointer'>
            <div className='size-9'>image</div>
            <span className='font-semibold'>Zetadev</span>
          </div>
        </div>
        <Link href={'/'}>
          <Settings className='cursor-pointer text-gray-500 size-6' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
