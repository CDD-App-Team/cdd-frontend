import { useParams } from 'react-router-dom';
import TaskForm from './TaskForm';

// eslint-disable-next-line react/prop-types
export function Tasks() {
  const { id } = useParams();
  const { addTask } = useTask(id);
  
  const handleAdd = async (task) => {
    await addTask(task);
  };

  return (
    <div>
      <TaskForm onAdd={handleAdd}/>
    </div>
  );
}
