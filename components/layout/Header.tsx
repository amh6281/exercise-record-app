import Link from 'next/link';

const Header = () => {
  return (
    <header className='border-b bg-white/80 backdrop-blur dark:bg-black/60'>
      <div className='mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link href='/' className='flex items-center gap-2'>
          <span className='text-lg font-semibold tracking-tight'>FitFlow</span>
          <span className='hidden text-xs text-zinc-500 sm:inline'>
            운동 루틴 조합기
          </span>
        </Link>
        <nav className='flex items-center gap-3 text-sm font-medium text-zinc-600 dark:text-zinc-300'>
          <Link
            href='/routine/new'
            className='rounded-full px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900'
          >
            루틴 생성
          </Link>
          <Link
            href='/report/new'
            className='rounded-full px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900'
          >
            리포트 생성
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
