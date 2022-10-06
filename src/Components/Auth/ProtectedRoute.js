import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../state/UserContext.js';

export default function ProtectedRoute() {
  const user = useUser();
  if (!user) return <Navigate to="auth" />;

  return <Outlet />;
}
