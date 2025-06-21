import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='dark:bg-choco-800 flex min-h-[calc(100vh-64px)] items-center justify-center bg-white'>
      <div className='px-4 text-center'>
        <div className='relative'>
          <h1 className='text-primary-500 animate-bounce text-9xl font-bold'>404</h1>
        </div>
        <h2 className='text-choco-700 dark:text-choco-100 mt-4 text-2xl font-semibold'>운동을 놓치셨네요!</h2>
        <p className='text-cool-600 dark:text-cool-200 mt-2'>
          이 페이지는 휴식 중입니다.
          <br />
          홈으로 돌아가서 다시 운동을 시작해보세요!
        </p>
        <Link
          href='/'
          className='bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 mt-8 inline-block rounded-lg px-6 py-3 text-white transition-colors duration-200'
        >
          운동하러 가기
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
