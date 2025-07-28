'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkClassName = (path: string) => {
    const baseClasses = 'flex h-full w-full flex-col items-center justify-center transition-colors duration-200';
    const activeClasses = 'text-primary-500 dark:text-primary-400';
    const inactiveClasses = 'text-cool-600 dark:text-cool-300 hover:text-primary-500 dark:hover:text-primary-400';

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const navItems = [
    {
      href: '/',
      label: '홈',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      ),
    },
    // {
    //   href: '/routines',
    //   label: '루틴 탐색',
    //   icon: (
    //     <svg
    //       xmlns='http://www.w3.org/2000/svg'
    //       className='h-6 w-6'
    //       fill='none'
    //       viewBox='0 0 24 24'
    //       stroke='currentColor'
    //     >
    //       <path
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         strokeWidth={2}
    //         d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    //       />
    //     </svg>
    //   ),
    // },
    {
      href: '/my-routines',
      label: '내 루틴',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />
        </svg>
      ),
    },
    // {
    //   href: '/records',
    //   label: '기록',
    //   icon: (
    //     <svg
    //       xmlns='http://www.w3.org/2000/svg'
    //       className='h-6 w-6'
    //       fill='none'
    //       viewBox='0 0 24 24'
    //       stroke='currentColor'
    //     >
    //       <path
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         strokeWidth={2}
    //         d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    //       />
    //     </svg>
    //   ),
    // },
  ];

  return (
    <nav className='border-cool-200 dark:bg-choco-800 dark:border-choco-700 fixed right-0 bottom-0 left-0 border-t bg-white'>
      <div className='mx-auto max-w-4xl px-4'>
        <div className='flex h-16 items-center justify-around'>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={getLinkClassName(item.href)}>
              {item.icon}
              <span className='mt-1 text-xs font-medium'>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
