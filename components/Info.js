import React from 'react';

function Info() {
  return (
    <>
      <div className='max-w-5xl mx-auto pt-4 px-4 sm:pb-10 sm:px-6 lg:px-8'>
        <div className='bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg'>
          <div className='border-t border-gray-200'>
            <dl>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>E-mail</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  Tomás Di Maria
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>
                  Application for
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  Full-Stack Web Developer: Javascript
                </dd>
              </div>
              <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>
                  Experience
                </dt>
                <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                  <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                    Web Development
                  </span>
                  <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                    Cloud Infrastructure
                  </span>
                  <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                    Digital Marketing
                  </span>
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>
                  Preferred Stack
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  $120,000
                </dd>
              </div>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>Social</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
