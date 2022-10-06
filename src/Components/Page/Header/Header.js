import styles from './Header.css';
import Navigation from '../Navigation/Navigation';
import { signOutUser } from '../../../services/auth';

export default function Header() {

  
  return (
    <header className={styles.Header}>
      <button onClick={signOutUser}>log out</button>
      <div className={styles.NavigationContainer}>
        <Navigation/>
      </div>
    </header>
  );
}
