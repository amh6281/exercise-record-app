interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className='mb-12 text-center'>
      <h1 className='text-primary-500 dark:text-primary-400 mb-4 text-3xl font-bold md:text-4xl'>{title}</h1>
      <p className='text-choco-700 dark:text-choco-100 text-lg font-medium'>{description}</p>
    </div>
  );
};

export default PageHeader;
