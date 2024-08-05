'use client';
import { Menu } from 'lucide-react';

const Sidebar = () => {
  return (
    <div>
      <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
        <div>Logo</div>
        <h1 className='font-extrabold tex-2xl'>ZETASTOCK</h1>

        <button
          className='md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={() => {}}
        >
          <Menu className='size-4' />
        </button>
      </div>
      {/* Links */}
      <div className='flex-grow mt-8'>{/* Links here */}</div>

      {/* Footer */}
      <div>
        <p className='text-center text-xs text-gray-500'>&copy; 2024 Zetadev</p>
      </div>
    </div>
  );
};

export default Sidebar;
