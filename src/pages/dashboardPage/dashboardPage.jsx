import React, { useState, useEffect, Fragment } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Media from "react-media";
import s from "./DashboardPage.module.css";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
//import Balance from "../../components/balance";
import Currency from "../../components/currency";
import operations from "../../redux/auth/auth-operations";

const DashboardPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplay(path === "/home" ? true : false);
  }, [path]);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <main className={s.main}>
          <aside className={s.aside}>
            <section className={s.nav}>
              <Nav />
              <Media
                queries={{
                  mobile: { maxWidth: 767 },
                  other: { minWidth: 768 },
                }}
              >
                {(matches) => {
                  return (
                    <Fragment>
                      {matches.mobile &&
                        display &&
                        {
                          /*< Balance />*/
                        }}
                      {matches.other &&
                        {
                          /*<Balance />*/
                        }}
                    </Fragment>
                  );
                }}
              </Media>
            </section>
            <section className={s.currency}>
              <Currency />
            </section>
          </aside>
          <article className={s.box}>
            <Outlet />
          </article>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
