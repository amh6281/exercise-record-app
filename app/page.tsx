import { HeroSection, PopularRoutines, StepsSection } from '@/components/home';

const Home = () => {
  return (
    <div className='space-y-10'>
      <section className='grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center'>
        <HeroSection />
        <PopularRoutines />
      </section>
      <StepsSection />
    </div>
  );
};

export default Home;
