import { useForm } from '../Forms/useForm.js';
import { FormButton, InputControl } from '../Forms/FormControls.js';
import styles from './ItemForm.css';


const initialData = {
  description: ''
};

// eslint-disable-next-line react/prop-types
export default function TaskForm({ onAdd }) {
  const [data, handleChange, reset] = useForm(initialData);

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
      <form className={styles.ItemForm} onSubmit={handleSubmit}>
        <InputControl
          label="Description"
          name="description"
          required
          placeholder="new item"
          value={data.description}
          onChange={handleChange}
        />
        <FormButton>Add</FormButton>
      </form>
    </div>
  );
}
