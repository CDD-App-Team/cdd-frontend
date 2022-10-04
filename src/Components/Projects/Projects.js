import { Link, Outlet } from 'react-router-dom';
export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <nav>
        <Link to="">boo!Bot</Link>
        <Link to="printstagram">Printstagram</Link>
        <Link to="vsssnake">VSssnake</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

