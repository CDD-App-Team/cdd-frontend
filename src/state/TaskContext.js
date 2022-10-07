import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import {
  getTasks,
  createNewTask, 
} from '../services/tasks.js';

const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TaskProvider({ children }) {
  //set state
  const [tasks, setTasks] = useState([]);
  const [newContent, setNewContent] = useState('');

  const stateAndSetters = {
    tasks, setTasks,
    newContent, setNewContent,
    handleAddTask
  };

  useEffect(() => {
    //create async function to fetch all tasks using getTasks()
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  function clearForm() {
    setNewContent('');
  }

  async function handleAddTask(newContent){
    const addedTask = await createNewTask(newContent);
    const newTasks = tasks.concat([addedTask]);
    setTasks(newTasks);
    clearForm();
  }

  return (
    <TaskContext.Provider value={stateAndSetters}>
      {children || <Outlet />}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
