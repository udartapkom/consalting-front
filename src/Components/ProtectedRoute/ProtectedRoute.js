import {Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(props) {
  const { loggedIn } = props;
  return loggedIn ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute;