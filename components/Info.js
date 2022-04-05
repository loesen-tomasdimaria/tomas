import {
  iconGithub,
  iconLinkedIn,
  iconTwitter,
  iconFacebook,
  iconInstagram,
} from './Icons';

function Info() {
  const techStack = [
    {
      name: 'Javascript',
      logo: '/images/tech-stack/javascript.svg',
      height: 48,
      width: 48,
      docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'NodeJS',
      logo: '/images/tech-stack/nodejs.svg',
      height: 48,
      width: 75,
      docs: 'https://nodejs.org/dist/latest-v14.x/docs/api/',
    },
    {
      name: 'expressJS',
      logo: '/images/tech-stack/expressjs.svg',
      height: 48,
      width: 100,
      docs: 'https://expressjs.com/en/4x/api.html',
    },
    {
      name: 'MongoDB',
      logo: '/images/tech-stack/mongodb.svg',
      height: 48,
      width: 150,
      docs: 'https://docs.mongodb.com/drivers/node/current/',
    },
    {
      name: 'React',
      logo: '/images/tech-stack/react.svg',
      height: 48,
      width: 55,
      docs: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      name: 'NextJS',
      logo: '/images/tech-stack/nextjs.svg',
      height: 48,
      width: 55,
      docs: 'https://nextjs.org/docs',
    },
  ];

  const social = [
    {
      name: 'GitHub',
      href: 'https://github.com/loesen-tomasdimaria',
      icon: iconGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tomasdim/',
      icon: iconLinkedIn,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/tomasdim',
      icon: iconInstagram,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/tomasdim',
      icon: iconTwitter,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/tomasdim',
      icon: iconFacebook,
    },
  ];

  return (
    <>
      <div className='sm:pb-15 mx-auto max-w-5xl px-4 pt-5 pb-24 sm:px-24 lg:px-8'>
        <div className='overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800'>
          <div className='border-t border-gray-200'>
            <dl className='divide-y divide-gray-200 dark:divide-black'>
              <div className='bg-white  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>E-mail</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  tomas.dimaria@loesen.co
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>
                  Application for
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  Full-Stack Web Developer: Javascript
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>
                  Experience
                </dt>
                <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0'>
                  <span className='mr-3 mb-1 inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-black dark:text-white'>
                    Web Development
                  </span>
                  <span className='mr-3 mb-1 inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-black dark:text-white'>
                    Cloud Infrastructure
                  </span>
                  <span className='mr-3 mb-1 inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-black dark:text-white'>
                    Digital Marketing
                  </span>
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>
                  Preferred Stack
                </dt>
                <dd className='mt-1 grid grid-cols-4 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0'>
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className='flex flex-col overflow-hidden'
                    >
                      <div className='mr-3 flex-1 py-1'>
                        <img
                          className='h-10'
                          src={tech.logo}
                          alt={tech.name}
                          width={tech.width}
                          height={tech.height}
                        />
                      </div>
                    </div>
                  ))}
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>Social</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  <div className='flex items-center space-x-6 md:order-2'>
                    {social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-gray-400 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'
                      >
                        <span className='sr-only'>{item.name}</span>
                        <item.icon className='h-6 w-6' aria-hidden='true' />
                      </a>
                    ))}
                  </div>
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
