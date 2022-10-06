import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from './Page/Layout';
import HomePage from './HomePage/HomePage';
import Auth from './Auth/Auth.js';
import AuthForm from './Auth/AuthForm.js';
import UserProvider from '../state/UserContext.js';
import ProtectedRoute from './Auth/ProtectedRoute.js';
import { Tasks } from './Tasks/Tasks.js';
import ListsProvider from '../state/ListsContext.js';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="auth" element={<Auth />}>
            <Route index element={<AuthForm mode="signin" />} />
            <Route
              path="signup"
              element={<AuthForm mode="signup" />}
            />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route element={<ListsProvider />}>
                <Route 
                  path="lists" 
                  element = {<Tasks/>}
                />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
