const Footer = () => {
  return (
    <footer className='border-t bg-white/80 py-4 text-center text-xs text-zinc-500 dark:bg-black/60'>
      © {new Date().getFullYear()} FitFlow. All rights reserved.
    </footer>
  );
};

export default Footer;
