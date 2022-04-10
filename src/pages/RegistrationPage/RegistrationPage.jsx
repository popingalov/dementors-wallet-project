import React from 'react';
import s from './RegistrationPage.module.css';
<<<<<<< HEAD:src/pages/RegistrationPage/RegistrationPage.js
// import RegistrationForm from '../../components/registrationForm';
=======
// import RegistrationForm from "../../components/RegistrationForm";
import BackgroundContainer from 'components/backgroundContainer/BackgroundContainer';
>>>>>>> 9eba9226b2bfc3137b52c1001d2d3d5d2345c321:src/pages/RegistrationPage/RegistrationPage.jsx

const RegistrationPage = () => {
  return (
    <BackgroundContainer>
      <div className={s.wrapper}>
<<<<<<< HEAD:src/pages/RegistrationPage/RegistrationPage.js
        <p className={s.title}>Finance App</p>
        {/* <RegistrationForm /> */}
=======
        <div className={s.box}>
          <p className={s.title}>Finance App</p>
        </div>
        {/* <RegistrationForm/> */}
        <div className={s.ellipseBlur} />
>>>>>>> 9eba9226b2bfc3137b52c1001d2d3d5d2345c321:src/pages/RegistrationPage/RegistrationPage.jsx
      </div>
    </BackgroundContainer>
  );
};

export default RegistrationPage;
