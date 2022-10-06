import { useParams } from 'react-router-dom';
import { useList } from '../../state/ListsContext.js';
import TaskForm from './TaskForm';

// eslint-disable-next-line react/prop-types
export function Tasks() {
  const { id } = useParams();
  const { addItem } = useList(id);
  
  const handleAdd = async (item) => {
    await addItem(item);
  };

  return (
    <div>
      <TaskForm onAdd={handleAdd}/>
    </div>
  );
}
