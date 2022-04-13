import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Media from 'react-media';
import s from './dashboardPage.module.css';
import Header from '../../components/header';
import Nav from '../../components/nav';
import Balance from '../../components/balance';
import Currency from '../../components/money';
import categoriesOperations from '../../redux/categories/categories-operations';
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
  const lang = useSelector(globalSelectors.lang);
  const isModalOpen = useSelector(globalSelectors.isModalOpen);
  useEffect(() => {
    setDisplay(path === '/wallet' ? true : false);
    dispatch(categoriesOperations.getCategories());
  }, [path]);

  //   useEffect(() => {
  //     dispatch(operations.fetchCurrentUser());
  //   }, [dispatch]);

  return (
    <>
      <Header lang={lang} />
      <Container>
        <div className={s.wrapper}>
          <main className={s.main}>
            
                {<Media
                queries={{
                  mobile: { maxWidth: 767 },
                  other: { minWidth: 768 },
                }}
              >
                {matches => {
                  return (
                    <Fragment>
                      {matches.mobile &&
                        <>
                        <section className={s.nav}>
                            <Nav />
                        </section>
                        < Balance />
                        <article className={s.box}>
                            <Outlet /> {children}
                        </article>
                        </>
                        
                        }
                      {matches.other &&
                        <>
                        
                        <aside className={s.aside}>
              <section className={s.nav}>
                <Nav />
                          </section>
                        < Balance />
                        <section className={s.currency}>
                         <Currency />
                        </section>
                            
              
                        </aside>
                        <article className={s.box}>
              <Outlet /> {children}
                        </article>
                        </>
                        }
                    </Fragment>
                  );
                }}
              </Media>}
              
          </main>
          <div className={s.addTransactionBtn}>
            <ModalAddTransactionsBtn />
          </div>
        </div>
        {isModalOpen && <Modal lang={lang} />}
      </Container>
    </>
  );
};

export default DashboardPage;
DashboardPage.propTypes = {
  lang: PropTypes.bool.isRequired,
};
