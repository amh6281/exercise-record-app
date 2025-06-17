import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex min-h-[calc(100vh-64px)] items-center justify-center bg-background'>
      <div className='px-4 text-center'>
        <div className='relative'>
          <h1 className='animate-bounce text-9xl font-bold text-primary'>404</h1>
        </div>
        <h2 className='mt-4 text-2xl font-semibold text-foreground'>운동을 놓치셨네요!</h2>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>
          이 페이지는 휴식 중입니다.
          <br />
          홈으로 돌아가서 다시 운동을 시작해보세요!
        </p>
        <Link
          href='/'
          className='mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-white transition-colors duration-200 hover:bg-primary-dark'
        >
          운동하러 가기
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
