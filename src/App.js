import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Media from 'react-media';


import authOperations from './redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import globalSelectors from 'redux/global/global-selectors';
import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';

import TransactionsTable from './components/transactionsTable';
import Nav from './components/nav';

import Loader from './components/loader/Loader';

// import Money from "components/money/Money";

import Header from './components/header';
import trns from './helpers/trns-example.json';
import DashBoard from 'components/dashboard';
import Money from 'components/money';

import Currency from './components/currency';
import HomeTab from './components/homeTab';

const NotFoundPage = lazy(() => import('./pages/notFoundPage'));

//import HomeText from './components/homeText';

const RegisterView = lazy(() => import('./pages/registrationPage'));
const LoginView = lazy(() => import('./pages/loginPage'));
const DashboardPage = lazy(() => import('./pages/dashboardPage'));

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
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader size={200} />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute restricted redirectTo="/wallet">
                    <LoginView />
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
                  <PublicRoute redirectTo="/wallet" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/wallet"
                element={
                  <PrivateRoute redirectTo="/login">
                    <DashboardPage>
                      <TransactionsTable />
                    </DashboardPage>
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PublicRoute restricted>
                    <NotFoundPage />
                  </PublicRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}

      <ToastContainer autoClose={3000} />
      {isLoadingSpinner && <Loader />}
    </>
  );
}
