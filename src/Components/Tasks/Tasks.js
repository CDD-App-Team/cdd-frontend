import TaskForm from './TaskForm';
import { useTaskContext } from '../../state/TaskContext';

// eslint-disable-next-line react/prop-types
export function Tasks() {
  const { 
    tasks
  } = useTaskContext();
  return (
    <div>
      <div>
        <TaskForm />
      </div>
      <ul>
        {tasks &&
          tasks.map((task, i) => (
            <li key={task.id + i}>{task.description}</li>
          ))}
      </ul>
    </div>
  );
}
