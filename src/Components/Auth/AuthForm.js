import { Link } from 'react-router-dom';
import { useAuth } from '../../state/UserContext.js';
import { InputControl, FormButton } from '../Forms/FormControls.js';
import { useForm } from '../Forms/useForm.js';

import styles from './AuthForm.css';

// eslint-disable-next-line react/prop-types
export default function AuthForm({ mode = 'signin' }) {
  const { signUp, signIn, error } = useAuth();
  const [credentials, handleChange] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await type.action(credentials);
    console.log(credentials);
  };

  const signin = {
    prompt: 'Sign into your account',
    button: 'Sign In',
    switch: {
      prompt: 'Need to create an account?',
      link: 'signup',
    },
    action: signIn,
  };

  const signup = {
    prompt: 'Create an account',
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account?',
      link: '../',
    },
    action: signUp,
  };

  const modes = { signin, signup };
  const type = modes[mode];

  return (
    <form className={styles.AuthForm} onSubmit={handleSubmit}>
      <h2>{type.prompt}</h2>

      <InputControl
        label="First Name"
        name="firstName"
        type="text"
        required
        value={credentials.firstName}
        onChange={handleChange}
      />

      <InputControl
        label="Last Name"
        name="lastName"
        type="text"
        required
        value={credentials.lastName}
        onChange={handleChange}
      />

      <InputControl
        label="Email"
        name="email"
        type="email"
        required
        value={credentials.email}
        onChange={handleChange}
      />

      <InputControl
        label="Password"
        name="password"
        type="password"
        required
        value={credentials.password}
        onChange={handleChange}
      />

      <FormButton>{type.button}</FormButton>

      <p className="error">{error}</p>

      <nav>
        <Link to={type.switch.link}>{type.switch.prompt}</Link>
      </nav>
    </form>
  );
}
