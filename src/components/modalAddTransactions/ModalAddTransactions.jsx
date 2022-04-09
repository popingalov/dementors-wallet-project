import s from './ModalAddTransactions.module.css';
import './ModalAddTransactions.module.css';
import 'react-datetime/css/react-datetime.css';
import { useDispatch } from 'react-redux';
import logOut from '../../redux/auth/auth-operations';
import closeBtnIcon from '../../assets/images/icons/close.svg';
import classNames from 'classnames';
import Datetime from 'react-datetime';
import TransactionsCategoriesSelect from './TransactionsCategoriesSelect';
import { useState } from 'react';
// import { Field } from 'formik';
export default function ModalAddTransactions(handleClose) {
  const dispatch = useDispatch();
  const [newValue, setNewValue] = useState({});

  const today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  let date = dd + '.' + mm + '.' + yyyy;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          handleClose();
        }}
        className={s.closeBtn}
      >
        <img src={closeBtnIcon} alt="Close" />
      </button>
      <p className={s.title}>Добавить транзакцию</p>
      <div className={s.checkboxWrap}>
        <span className={s.incomes}>Доход</span>

        <div className={classNames(s.button, s.r)} id={s['button-2']}>
          <input type="checkbox" className={s.checkbox} name="addTransaction" />
          <div className={s.knobs}></div>
          <div className={s.layer}></div>
        </div>

        <span className={s.outcomes}>Расход</span>
      </div>
      <TransactionsCategoriesSelect />
      <div className={s.sumAndDateWrap}>
        <input
          type="text"
          name="sum"
          className={s.sumInput}
          placeholder="0.00"
        />
        <Datetime
          dateFormat="DD.MM.YYYY"
          timeFormat={false}
          className={s.datetime}
          initialValue={date}
        />
      </div>
      <input type="text" placeholder="Комментарий" className={s.commentInput} />
      <div className={s.btnWrap}>
        <button
          type="button"
          className={s.acceptBtn}
          onClick={() => {
            handleClose();
          }}
        >
          Добавить
        </button>
        <button
          type="button"
          className={s.cancelBtn}
          onClick={() => {
            handleClose();
          }}
        >
          Отмена
        </button>
      </div>
    </>
  );
}
