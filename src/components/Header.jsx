import { NavLink } from 'react-router-dom';
import { useState } from 'react';
export default function Header() {
  const[showMenu, setShowMenu] = useState(false);

  return (
    <header className='shadow-lg sticky top-0 z-50 bg-black'>
      <nav className='flex items-center justify-between px-8 py-4'>
        {/* Left: Logo/Brand */}
        <NavLink
          to='/'
          className='font-poppins text-3xl font-extrabold text-white tracking-wide hover:text-blue-400 transition-colors'
        >
          Taskify
        </NavLink>

        {/* Center: Navigation Links */}
        <div className='md:flex gap-10 font-montserrat font-semibold text-lg hidden '>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              isActive
                ? 'bg-white text-black rounded-lg px-4 py-2 shadow font-inter transition-all'
                : 'text-gray-200 hover:text-blue-400 px-4 py-2 transition-colors font-inter'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/completed'
            className={({ isActive }) =>
              isActive
                ? 'bg-white text-black rounded-lg px-4 py-2 shadow font-inter transition-all'
                : 'text-gray-200 hover:text-blue-400 px-4 py-2 transition-colors font-inter'
            }
          >
            Completed
          </NavLink>
          
        </div>
        <button
          className='md:hidden '
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6 text-white'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>

        {/* Right: Placeholder for future content (e.g., profile, theme switch) */}
      </nav>
      {showMenu && (
        <div className='flex flex-col gap-4 px-8 py-4 bg-black md:hidden'>
          <NavLink
            to='/'
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive
                ? 'bg-white text-black rounded-lg px-4 py-2 shadow font-inter transition-all'
                : 'text-gray-200 hover:text-blue-400 px-4 py-2 transition-colors font-inter'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/completed'
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive
                ? 'bg-white text-black rounded-lg px-4 py-2 shadow font-inter transition-all'
                : 'text-gray-200 hover:text-blue-400 px-4 py-2 transition-colors font-inter'
            }
          >
            Completed
          </NavLink>
        </div>
      )}
    </header>
  );
}
