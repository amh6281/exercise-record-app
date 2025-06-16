'use client';

import Link from 'next/link';
import { useThemeStore } from '@/store/themeStore';

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <header className='fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-background dark:border-gray-800'>
      <div className='mx-auto max-w-4xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-xl font-bold text-primary'>GymTrack</span>
          </Link>

          <div className='flex items-center space-x-4'>
            <button
              onClick={toggleTheme}
              className='p-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-dark'
              aria-label={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
            >
              {isDarkMode ? (
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
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                </svg>
              ) : (
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
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
