'use client';

import Link from 'next/link';
import { useThemeStore } from '@/store/themeStore';
import { MoonIcon, SunIcon } from '@phosphor-icons/react/dist/ssr';

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <header className='dark:bg-choco-800 border-cool-200 dark:border-choco-700 fixed top-0 right-0 left-0 z-50 border-b bg-white'>
      <div className='mx-auto max-w-4xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-primary-500 dark:text-primary-400 text-xl font-bold'>GymTrack</span>
          </Link>

          <div className='flex items-center space-x-4'>
            <button
              onClick={toggleTheme}
              className='hover:text-primary-500 dark:hover:text-primary-400 text-cool-600 dark:text-cool-300 cursor-pointer p-2 transition-colors duration-200'
              aria-label={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
            >
              {isDarkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
