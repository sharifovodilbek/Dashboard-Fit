import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navList } from '../hooks/paths';
import image1 from '../assets/images/search.png'
import image2 from '../assets/images/image.png'
import image3 from '../assets/images/prof2.png'

const Header = () => {
  const { pathname } = useLocation();
  const [openInput, setOpenInput] = useState(false);

  function handleClose() {
    setTimeout(() => {
      setOpenInput(false);
    }, 150);
  }

  const pageTitle = navList.find(item => item.path === pathname)?.title || 'Dashboard';

  return (
    <div className='flex justify-between items-center py-3 px-6 bg-white shadow-sm'>
      { }
      <strong className='text-2xl font-semibold text-[#252733]'>
        {pageTitle}
      </strong>

      <div className='flex items-center gap-4'>

        { }
        <div className='relative'>
          <img
            src={image1}
            alt='search'
            className='w-5 h-5 cursor-pointer'
            onClick={() => setOpenInput(true)}
          />
          <input
            type='text'
            placeholder='Typing...'
            className={`absolute right-6 top-[-2px] border border-gray-300 rounded px-2 py-1 text-sm outline-none transition-all duration-300 bg-white ${openInput ? 'w-40 opacity-100' : 'w-0 opacity-0'
              }`}
            onBlur={handleClose}
            autoFocus={openInput}
          />
        </div>

        { }
        <img
          src={image2}
          alt='notifications'
          className='w-5 h-5'
        />

        { }
        <div className='h-6 w-px bg-gray-300'></div>

        { }
        <div className='flex items-center gap-2'>
          <span className='text-sm text-[#252733] font-medium'>Jones Ferdinand</span>
          <img
            src={image3}
            alt='user'
            className='w-8 h-8 rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
