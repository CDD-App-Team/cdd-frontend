import styles from './Header.css';
import Navigation from '../Navigation/Navigation';
import { signOutUser } from '../../../services/auth';

export default function Header() {

  function handleSignout(){
    signOutUser();
    location.replace('/auth');
  }
  
  return (
    <header className={styles.Header}>
      <button onClick={handleSignout}>log out</button>
      <div className={styles.NavigationContainer}>
        <Navigation/>
      </div>
    </header>
  );
}
