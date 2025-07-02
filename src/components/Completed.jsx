import { TaskProvider } from '../context/TaskContext';
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
export default function Completed() {
  const { tasks, setTasks } = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.status === 'done');
  return (
    <div className='min-h-screen bg-gray-900 py-6 sm:py-10 px-2 sm:px-0'>
      <div className='max-w-xl mx-auto w-full'>
        <h2 className='text-2xl sm:text-3xl font-bold text-red-500 mb-6 sm:mb-8 text-center drop-shadow-lg flex items-center justify-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7 sm:h-8 sm:w-8 text-green-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
          Completed Tasks
        </h2>
        {completedTasks.length === 0 ? (
          <div className='text-center text-gray-400 text-base sm:text-lg'>
            No completed tasks yet!
          </div>
        ) : (
          <div className='space-y-3 sm:space-y-4'>
            {completedTasks.map((task) => (
              <div
                key={task.id}
                className='flex flex-col sm:flex-row items-center justify-between bg-gray-800 rounded-lg shadow-2xl p-3 sm:p-4 border-l-4 border-green-500 w-full'
              >
                <span className='text-base sm:text-lg text-gray-200 break-words flex justify-between sm:flex sm:justify-between w-full'>
                  {task.text}
                  <div className='flex items-center gap-2 ml-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <button
                      className='flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-400'
                      title='Delete Task'
                      onClick={() => {
                        if (typeof setTasks === 'function') {
                          setTasks(tasks.filter((t) => t.id !== task.id));
                        }
                      }}
                    >
                      <FaTrash className='text-white text-base sm:text-lg' />
                    </button>
                  </div>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
