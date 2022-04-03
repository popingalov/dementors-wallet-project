import React from 'react';
import s from '../RegistrationPage/RegistrationPage.module.css';
// import LoginForm from "../../components/LoginForm";
import BackgroundContainer from 'components/BackgroundContainer';

const LoginPage = () => {
  return (
    <BackgroundContainer>
      <div className={s.wrapper}>
        <div className={s.box}>
          <p className={s.title}>Finance App</p>
        </div>
        {/*<LoginForm/> */}
        <div className={s.ellipseBlur}></div>
      </div>
    </BackgroundContainer>
  );
};

export default LoginPage;
