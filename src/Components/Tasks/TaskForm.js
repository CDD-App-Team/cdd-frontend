// import { useForm } from '../Forms/useForm.js';

import { FormButton, InputControl } from '../Forms/FormControls.js';
import styles from './TaskForm.css';


// eslint-disable-next-line react/prop-types
export default function TaskForm({ onAdd }) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { description, ...obj } = data;
    if (description) obj.description = description;
    await onAdd(obj);
    reset();
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
          value={data.description}
          onChange={handleChange}
        />
        <FormButton>Add</FormButton>
      </form>
    </div>
  );
}
