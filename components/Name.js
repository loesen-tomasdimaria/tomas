import React from 'react';

function Name() {
  return (
    <div className='mx-auto max-w-5xl px-4 pt-4 sm:px-6 sm:pt-24 lg:px-8'>
      <div className='overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800'>
        <div className='flex items-center justify-between px-4 py-5 sm:px-6'>
          <div className='flex items-center'>
            <img
              className='mr-4 h-16 w-16 rounded-full border border-white shadow-lg'
              src='/images/picture.jpg'
              alt=''
              width={300}
              height={300}
            />
            <h3 className='text-lg font-medium leading-none text-gray-900 dark:text-white'>
              Tomás Di Maria
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Name;
