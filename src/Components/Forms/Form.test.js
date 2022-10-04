import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import {
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from './FormControls.js';
import { useForm } from './useForm.js';

function Test({ onSubmit, formData }) {
  const [data, handleChange] = useForm(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

test('Form Changes update return object to the UI', async () => {
  const user = userEvent.setup();

  // use a jest mock function to track what onSubmit returned
  const handleSubmit = jest.fn();

  render(<Test onSubmit={handleSubmit} />);

  // input text
  const input = screen.getByLabelText('Name');
  await user.type(input, 'username');

  // select
  const selectControl = screen.getByLabelText('What is your role?');
  await user.selectOptions(selectControl, '2');

  // input text
  const textArea = screen.getByLabelText(
    'Here is your time to shine, tell us your pitch'
  );
  await user.type(textArea, 'user pitch');

  // checkbox
  const checkbox = screen.getByLabelText('Yes');
  await user.click(checkbox);

  // click button
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'username',
    role: '2',
    pitch: 'user pitch',
    yes: true,
  });
});

test('Form updates data when initialData changes', async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();

  const { rerender } = render(
    <Test
      onSubmit={handleSubmit}
      formData={{
        name: 'username',
        role: '2',
        pitch: 'user pitch',
        yes: true,
      }}
    />
  );

  // input text
  const input = screen.getByLabelText('Name');
  await user.clear(input);
  await user.type(input, 'abc');

  const changedData = {
    name: 'updated username',
    role: '4',
    pitch: 'updated pitch',
    yes: false,
  };

  rerender(<Test onSubmit={handleSubmit} formData={changedData} />);

  // click button
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith(changedData);
});
