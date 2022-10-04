import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  // RadioButtonControl,
} from '../Forms/FormControls';

import styles from './About.css';
import { useForm } from '../Forms/useForm.js';

export default function About() {
  const [data, handleChange] = useForm();

  return (
    <div className={styles.About}>
      <div>
        <h1>Lets Work Together!</h1>
      </div>
      <form>
        <InputControl
          label="Name"
          name="name"
          placeholder="your name"
          required
          value={data.name || ''}
          onChange={handleChange}
        />

        <CheckboxControl
          legend="Have you worked with us before?"
          label="Yes"
          name="yes"
          value={data.yes || false}
          onChange={handleChange}
        />

        <SelectControl
          label="What is your role?"
          name="role"
          required
          placeholder="select an option..."
          value={data.role || ''}
          onChange={handleChange}
        >
          <option value="1">Software Engineering</option>
          <option value="2">UX/UI</option>
          <option value="3">Small Business Owner</option>
          <option value="4">Just Curious</option>
          <option value="5">Student</option>
        </SelectControl>

        <TextAreaControl
          label="Here is your time to shine, tell us your pitch"
          name="pitch"
          required
          placeholder="Shoot for the stars..."
          value={data.pitch || ''}
          onChange={handleChange}
        />
        <FormButton>Submit</FormButton>
      </form>
      <pre>{JSON.stringify(data, true, 2)}</pre>
    </div>
  );
}
