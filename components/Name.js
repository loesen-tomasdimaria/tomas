import React from 'react';
import Image from 'next/image';

function Name() {
  return (
    <div className='max-w-5xl mx-auto pt-4 px-4 sm:pt-24 sm:px-6 lg:px-8'>
      <div className='bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg'>
        <div className='px-4 py-5 sm:px-6 flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              className='h-16 w-16 rounded-full mr-4 shadow-lg border border-white'
              src='/images/picture.jpg'
              alt=''
              width={300}
              height={300}
            />
            <h3 className='text-lg leading-none font-medium text-gray-900 dark:text-white dark:text-white'>
              Tomás Di Maria
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Name;
