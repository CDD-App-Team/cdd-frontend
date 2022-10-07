// import { useForm } from '../Forms/useForm.js';

import { FormButton, InputControl } from '../Forms/FormControls.js';
import styles from './TaskForm.css';
import { useTaskContext } from '../../state/TaskContext';

// eslint-disable-next-line react/prop-types
export default function TaskForm() {

  const { 
    handleAddTask, 
    newContent, 
    setNewContent 
  } = useTaskContext();

  const handleAdd = async (description) => {
    await handleAddTask({ description, completed: false });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAdd(newContent);
    console.log(newContent);
    setNewContent('');
  };

  return (
    <div>
      <h2>To Do List</h2>
      <form className={styles.TaskForm} onSubmit={handleSubmit}>
        <InputControl
          label="Description"
          name="description"
          required
          placeholder="new task"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <FormButton>Add</FormButton>
      </form>
    </div>
  );
}
