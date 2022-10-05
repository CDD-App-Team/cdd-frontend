import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from './Page/Layout';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Projects from './Projects/Projects';
import BooBot from './Projects/BooBot';
import Printstagram from './Projects/Printstagram/Printstagram';
import VSssnake from './Projects/VSssnake/VSssnake';
import Search from './Search/Search';
import Auth from './Auth/Auth.js';
import AuthForm from './Auth/AuthForm.js';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="auth" element={<Auth />}>
          <Route index element={<AuthForm mode="signin" />} />
          <Route path="signup" element={<AuthForm mode="signup" />} />
        </Route>

        <Route element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="about" element={<About />} />

          <Route path="search" element={<Search />} />

          <Route path="projects" element={<Projects />}>
            <Route index element={<BooBot />} />
            <Route path="printstagram" element={<Printstagram />} />
            <Route path="vsssnake" element={<VSssnake />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
