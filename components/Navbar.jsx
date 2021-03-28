import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <>
      <nav className='flex items-center flex-wrap p-3 text-black '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl font-bold uppercase tracking-wide'>
              Space Avionics Giessen
            </span>
          </a>
        </Link>
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/imprint'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-200 hover:text-black'>
                Imprint
              </a>
            </Link>
            <Link href='/privacy'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-200 hover:text-black'>
                Privacy
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-200 hover:text-black'>
                About us
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-200 hover:text-black'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};