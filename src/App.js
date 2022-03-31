import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import authOperations from './redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';
//
//
const HomeView = lazy(() => import('./pages/HomeView'));
const RegisterView = lazy(() => import('./pages/RegisterView'));
const LoginView = lazy(() => import('./pages/LoginView'));
const WalletView = lazy(() => import('./pages/WalletView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>Hi world</h1>
      ) : (
        <>
          <Suspense fallback={<h1>Крутим спинер</h1>}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <h2>Старт?</h2>
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <h2>Registr</h2>
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <h2>login</h2>
                  </PublicRoute>
                }
              />
              <Route
                path="/wallet"
                element={
                  <PrivateRoute redirectTo="/login">
                    <h2>wallet?</h2>
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}

      <ToastContainer autoClose={3000} />
    </>
  );
}
