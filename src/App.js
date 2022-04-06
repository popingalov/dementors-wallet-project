import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import authOperations from './redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import globalSelectors from 'redux/global/global-selectors';
import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';
import Nav from './components/nav';
import Modal from 'components/modal';

//модалка, вставила сюда, чтобы было видно, берите потом так же вставляйте в свои компоненты, куда нужно
import ExitModalBtn from './components/exitModalBtn';
//это кнопка конкретно для выхода из приложения, ви в свои модалки вставляйте вместо нее свой компонент кнопки
import ExitModal from './components/exitModal';
//содержание самой формы в модалке, вместо этого компонента вставляйте свои компоненты.
import Loader from './components/loader/Loader';
import Header from './components/header/Header';

const HomeView = lazy(() => import('./pages/HomeView'));
const RegisterView = lazy(() => import('./pages/registrationPage'));
const LoginView = lazy(() => import('./pages/loginPage'));
const WalletView = lazy(() => import('./pages/WalletView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingCurrent);
  const isLoadingSpinner = useSelector(globalSelectors.isLoadingSpinner);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>Hi world</h1>
      ) : (
        <>
          <Suspense fallback={<Loader />}>
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
                    <Nav />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
      <Modal openModalButton={ExitModalBtn} content={ExitModal} />
      <ToastContainer autoClose={3000} />
      {isLoadingSpinner && <Loader />}
    </>
  );
}
