'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className='fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-background dark:border-gray-800'>
      <div className='mx-auto max-w-screen-xl px-4'>
        <div className='flex h-16 items-center justify-around'>
          <Link
            href='/'
            className={`flex h-full w-full flex-col items-center justify-center ${
              isActive('/') ? 'text-orange-500' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
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
            <span className='mt-1 text-xs'>홈</span>
          </Link>

          <Link
            href='/routines'
            className={`flex h-full w-full flex-col items-center justify-center ${
              isActive('/routines') ? 'text-orange-500' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
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
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
              />
            </svg>
            <span className='mt-1 text-xs'>루틴 탐색</span>
          </Link>

          <Link
            href='/my-routines'
            className={`flex h-full w-full flex-col items-center justify-center ${
              isActive('/my-routines') ? 'text-orange-500' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
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
            <span className='mt-1 text-xs'>내 루틴</span>
          </Link>

          <Link
            href='/records'
            className={`flex h-full w-full flex-col items-center justify-center ${
              isActive('/records') ? 'text-orange-500' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
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
                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              />
            </svg>
            <span className='mt-1 text-xs'>기록</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
