import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import authOperations from './redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';
import Header from './components/Header/Header';
//
//
const HomeView = lazy(() => import('./pages/HomeView'));
const RegisterView = lazy(() => import('./pages/RegistrationPage'));
const LoginView = lazy(() => import('./pages/LoginPage'));
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
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/wallet"
                element={
                  <PrivateRoute redirectTo="/login">
                    <Header />
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
