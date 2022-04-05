import React from 'react';
import s from '../registrationPage/registrationPage.module.css';
// import LoginForm from "../../components/LoginForm";
import BackgroundContainer from 'components/backgroundContainer';

const LoginPage = () => {
  return (
    <BackgroundContainer>
      <div className={s.wrapper}>
        <div className={`${s.box } ${s.picture}`}>
          <p className={s.title}>Finance App</p>
        </div>
        {/*<LoginForm/> */}
        <div className={s.ellipseBlur}></div>
      </div>
    </BackgroundContainer>
  )
};

export default LoginPage;
