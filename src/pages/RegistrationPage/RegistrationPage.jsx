import React from 'react';
import s from './registrationPage.module.css';
// import RegistrationForm from "../../components/RegistrationForm";
import BackgroundContainer from 'components/backgroundContainer';

const RegistrationPage = () => {
  return (
    <BackgroundContainer>
      <div className={s.wrapper}>
        <div className={s.box}>
          {/* <img/> */}
          <p className={s.title}>Finance App</p>
        </div>
        {/* <RegistrationForm/> */}
        <div className={s.ellipseBlur}/>
      </div>
    </BackgroundContainer>
  );
};

export default RegistrationPage;
