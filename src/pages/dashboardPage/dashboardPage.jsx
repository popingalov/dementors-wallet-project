import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Media from 'react-media';
import s from './dashboardPage.module.css';
import Header from '../../components/header';
import Nav from '../../components/nav';
import Balance from '../../components/balance';
import Currency from '../../components/money';
import categoriesOperations from '../../redux/categories/categories-operations';
import { ModalAddTransactionsBtn } from '../../components/modalAddTransactions';
import globalSelectors from 'redux/global/global-selectors';
import Modal from '../../components/modal';
import Container from 'components/сontainer/Container';
import categoriesSelectors from 'redux/categories/categories-selectors';
// import categoriesSelectors from '../../redux/categories/categories-selectors';

const DashboardPage = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState();
  const dispatch = useDispatch();
  const lang = useSelector(globalSelectors.lang);
  const isModalOpen = useSelector(globalSelectors.isModalOpen);
  const test = useSelector(categoriesSelectors.getCategories);
  useEffect(() => {
    setDisplay(path === '/exchange-rate' ? true : false);
    dispatch(categoriesOperations.getCategories());
  }, [path, dispatch]);

  //   useEffect(() => {
  //     dispatch(operations.fetchCurrentUser());
  //   }, [dispatch]);
  return (
    <>
      <Header lang={lang} />
      <Container>
        <div className={s.wrapper}>
          <main className={s.main}>
            {
              <Media
                queries={{
                  mobile: { maxWidth: 767 },
                  other: { minWidth: 768 },
                }}
              >
                {matches => {
                  return (
                    <Fragment>
                      {matches.mobile && (
                        <>
                          <section className={s.nav}>
                            <Nav lang={lang} />
                          </section>
                          {display ? (
                            <section className={s.currency}>
                              <Currency />
                            </section>
                          ) : (
                            <>
                              <Balance lang={lang} />
                              <article className={s.box}>
                                <Outlet /> {children}
                              </article>
                            </>
                          )}
                        </>
                      )}
                      {matches.other && (
                        <>
                          <aside className={s.aside}>
                            <section className={s.nav}>
                              <Nav lang={lang} />
                            </section>
                            <Balance lang={lang} />
                            <section className={s.currency}>
                              <Currency />
                            </section>
                          </aside>
                          <article className={s.box}>
                            <Outlet /> {children}
                          </article>
                        </>
                      )}
                    </Fragment>
                  );
                }}
              </Media>
            }
          </main>
          <div className={s.addTransactionBtn}>
            <ModalAddTransactionsBtn />
          </div>
        </div>
        {isModalOpen && <Modal lang={lang} categoriesTest={test} />}
      </Container>
    </>
  );
};

export default DashboardPage;
