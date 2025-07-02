import { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaHourglassHalf } from 'react-icons/fa';
import { TaskContext } from '../context/TaskContext';
export default function Home() {
  const { task, setTask } = useContext(TaskContext);
  const {tasks, setTasks} = useContext(TaskContext);

  return (
    <div className='min-h-screen bg-gray-900'>
      <>
        <h1 className='text-4xl font-bold font-poppins text-center mt-10 text-red-500 drop-shadow-lg'>
          Your Tasks
        </h1>
        <div className='flex justify-center mt-10'>
          <div className='shadow-2xl bg-gray-800 w-full max-w-md p-8 rounded-xl'>
            <form
              action=''
              className='flex flex-col gap-4 items-center justify-center w-full'
            >
              <input
                type='text'
                className='px-4 py-2 rounded w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500'
                placeholder='Add a task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                className='bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-2 rounded font-semibold w-full'
                onClick={(e) => {
                  e.preventDefault();
                  setTasks([
                    ...tasks,
                    { id: Date.now(), text: task, status: 'pending' },
                  ]);
                  setTask('');
                }}
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
        <div className='flex flex-col items-center mt-12'>
          <h2 className='text-2xl font-semibold text-white mb-6'>
            Today's Tasks
          </h2>
          <div className='w-full max-w-md space-y-3 '>
            {tasks.length === 0 && (
              <div className='text-gray-400 text-center'>No tasks yet.</div>
            )}
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center justify-between bg-gray-700 px-4 py-3 rounded shadow transition-all `}
              >
                <span className='text-white'>{task.text}</span>
                <span className='flex gap-3'>
                  {task.status === 'pending' && (
                    <>
                      <button
                        id='done'
                        className='bg-green-500 hover:bg-green-700 rounded-lg p-2'
                        onClick={() => {
                          setTasks(
                            tasks.map((t) =>
                              t.id === task.id ? { ...t, status: 'done' } : t
                            )
                          );
                        }}
                      >
                        Done
                      </button>
                      <button
                        id='pending'
                        className='bg-yellow-600 sm:hover:bg-yellow-700 p-2 rounded-lg'
                        onClick={() => {
                          setTasks(
                            tasks.map((t) =>
                              t.id === task.id
                                ? { ...t, status: 'pending-marked' }
                                : t
                            )
                          );
                        }}
                      >
                        Pending
                      </button>
                    </>
                  )}
                  {task.status === 'done' && (
                    <FaCheckCircle
                      className='text-green-500 text-2xl'
                      title='Completed'
                    />
                  )}
                  {task.status === 'pending-marked' && (
                    <FaHourglassHalf
                      className='text-yellow-400 text-2xl'
                      title='Pending'
                    />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}