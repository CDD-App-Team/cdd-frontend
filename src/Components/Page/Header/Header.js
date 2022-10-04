import styles from './Header.css';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>I am Header</h1>
      <div className={styles.NavigationContainer}>
        <Navigation/>
      </div>
    </header>
  );
}
