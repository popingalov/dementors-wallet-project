import React from 'react';
import s from './LoginPage.module.css';
// import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.title}>Finance App</p>
        {/* <LoginForm/> */}
      </div>
    </div>
  );
};

export default LoginPage;
