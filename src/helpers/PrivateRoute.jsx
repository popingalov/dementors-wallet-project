import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
{
  /* <Navigate to={redirectTo} /> */
}
{
  /* <h1>Hi world {redirectTo}</h1> */
}
