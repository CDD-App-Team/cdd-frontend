import { Navigate, Outlet } from 'react-router-dom';
import styles from './Auth.css';
// import { useUser } from '../../state/UserContext.jsx';

export default function Auth() {
  // const user = useUser();

  // TODO: handle clever redirect to page that got us here
  // if (user) return <Navigate to="/" />;

  return (
    <main className={styles.Auth}>
      <h1>Shopping List</h1>
      <Outlet />
    </main>
  );
}
