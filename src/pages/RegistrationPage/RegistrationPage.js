import React from 'react';
import s from './RegistrationPage.module.css';
// import RegistrationForm from '../../components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.title}>Finance App</p>
        {/* <RegistrationForm /> */}
      </div>
    </div>
  );
};

export default RegistrationPage;
