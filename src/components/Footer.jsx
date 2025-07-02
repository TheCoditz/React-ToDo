import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='w-full bg-gray-800 border-t border-gray-700 py-6 mt-16'>
      <div className='max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-end justify-between px-4 gap-4'>
        <nav className='flex gap-6 order-2 sm:order-1 w-full sm:w-auto justify-center sm:justify-start mb-2 sm:mb-0'>
          <Link
            to='/'
            className='text-gray-200 hover:text-red-400 text-lg font-semibold transition-colors'
          >
            Home
          </Link>
          <Link
            to='/completed'
            className='text-gray-200 hover:text-green-400 text-lg font-semibold transition-colors'
          >
            Completed
          </Link>
        </nav>
        <span className='text-gray-300 text-base text-center font-poppins order-1 sm:order-2 w-full sm:w-auto'>
          &copy; {new Date().getFullYear()} TO-DO App. All rights reserved.
        </span>
        <span className='text-gray-400 text-sm text-center sm:text-right order-3 w-full sm:w-auto'>
          Made with <span className='text-red-500'>&#10084;</span> by TheCoditz
        </span>
      </div>
    </footer>
  );
}
