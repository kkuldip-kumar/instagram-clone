import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const AuthRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
export default AuthRoute;
