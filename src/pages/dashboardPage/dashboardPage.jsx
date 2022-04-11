import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Media from 'react-media';
import s from './dashboardPage.module.css';
import Header from '../../components/header';
import Nav from '../../components/nav';
import Balance from '../../components/balance';
import Currency from '../../components/money';
import operations from '../../redux/auth/auth-operations';
import { ModalAddTransactionsBtn } from '../../components/modalAddTransactions';
import globalSelectors from 'redux/global/global-selectors';
import Modal from '../../components/modal';
import Container from 'components/сontainer/Container';
const DashboardPage = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(globalSelectors.isModalOpen);
  useEffect(() => {
    setDisplay(path === '/wallet' ? true : false);
  }, [path]);

  //   useEffect(() => {
  //     dispatch(operations.fetchCurrentUser());
  //   }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <div className={s.wrapper}>
          <main className={s.main}>
            <aside className={s.aside}>
              <section className={s.nav}>
                <Nav />
                {/* <Media
                queries={{
                  mobile: { maxWidth: 767 },
                  other: { minWidth: 768 },
                }}
              >
                {matches => {
                  return (
                    <Fragment>
                      {matches.mobile &&
                        display &&
                        
                          < Balance />
                        }
                      {matches.other &&
                        
                          <Balance />
                        }
                    </Fragment>
                  );
                }}
              </Media> */}
              </section>
              <Balance />
              <section className={s.currency}>
                <Currency />
              </section>
            </aside>
            <article className={s.box}>
              <Outlet /> {children}
            </article>
          </main>
          <div className={s.addTransactionBtn}>
            <ModalAddTransactionsBtn />
          </div>
        </div>
        {isModalOpen && <Modal />}
      </Container>
    </>
  );
};

export default DashboardPage;
