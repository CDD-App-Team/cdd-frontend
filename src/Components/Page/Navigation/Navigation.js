import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="search">Search Zeldex</NavLink>
    </nav>
  );
}
