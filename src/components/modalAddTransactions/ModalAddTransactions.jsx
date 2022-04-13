import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import closeBtnIcon from '../../assets/images/icons/close.svg';
import modalActions from '../../redux/global/global-actions';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/en-au';
import transactionsOperations from '../../redux/transactions/transaction-operations';
import './ModalAddTransactions.module.css';
import s from './ModalAddTransactions.module.css';
import TransactionsCategoriesSelect from './TransactionsCategoriesSelect';

let schema = yup.object().shape({
  type: yup
    .string()
    .default('-')
    .required(
      "Выберите тип транзакции 'Доход' или  'Расходы'. Это обязательное поле ",
    ),
  amount: yup
    .string()
    .max(10)
    .default('0.00')
    .required('Введите сумму. Это обязательное поле'),

  date: yup
    .string()
    .default(function () {
      const today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();
      let currentDate = dd + '.' + mm + '.' + yyyy;
      return currentDate;
    })
    .required(),
  comment: yup
    .string()
    .max(15, 'Максимально допустимая длинна комментария 15 символов'),
  category: yup
    .string()
    .max(15, 'Максимально допустимая длинна комментария 15 символов'),
});

const today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
let currentDate = dd + '.' + mm + '.' + yyyy;

const initialValues = {
  type: '',
  amount: '',
  date: '',
  comment: '',
  category: '',
};

export default function ModalAddTransactions({ handleClose, lang }) {
  const [date, setDate] = useState(currentDate);
  const [dateFiltr, setDateFiltr] = useState(new Date(today).getTime());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('-');
  const [newCategory, setNewCategory] = useState('');
  const dispatch = useDispatch();

  const handleCheckbox = e => {
    e.target.checked === true
      ? setTransactionType('+')
      : setTransactionType('-');
  };

  const onChangeCategory = e => {
    return setCategory(e.value);
  };

  const getDate = e => {
    return (
      setDate(
        `${String(e.date()).padStart(2, '0')}.${String(e.month() + 1).padStart(
          2,
          '0',
        )}.${e.year()}`,
      ),
      setDateFiltr(new Date(e).getTime())
    );
  };

  const addCategory = e => {
    setNewCategory(e.target.value);
  };
  const amountChange = e => {
    return setAmount(e.target.value);
  };
  const amountForSending = amount => {
    if (Number.isInteger(Number(amount)) === true) {
      return amount + '.00';
    } else return amount;
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          const reset = {
            type: transactionType,
            amount: amountForSending(amount),
            date: date ? date : currentDate,
            dataFiltr: dateFiltr,
            comment: values.comment || 'Нет комментария',
            category,
            newCategory,
          };
          const reset2 = {
            type: transactionType,
            amount: amountForSending(amount),
            date: date ? date : currentDate,
            dataFiltr: dateFiltr,
            comment: values.comment || 'Нет комментария',
            category,
          };
          const result = newCategory ? reset : reset2;
          dispatch(transactionsOperations.addTransaction(result));
          setAmount('');
          setCategory('');
          setDate('');
          setTransactionType('-');
          resetForm();
        }}
      >
        <Form autoComplete="off">
          <button
            type="button"
            onClick={() => {
              handleClose();
              dispatch(modalActions.modalAddTransactionClose());
            }}
            className={s.closeBtn}
          >
            <img src={closeBtnIcon} alt="Close" />
          </button>
          <p className={s.title}>Добавить транзакцию</p>
          <div className={s.checkboxWrap}>
            <span
              className={
                transactionType === '+'
                  ? classNames(s.incomes, s.incomesActive)
                  : s.incomes
              }
            >
              {lang ? 'Incomes' : 'Доход'}
            </span>
            <label htmlFor="transactionType">
              <div className={classNames(s.button, s.r)} id={'button-2'}>
                <Field
                  type="checkbox"
                  className={s.checkbox}
                  name="type"
                  onClick={handleCheckbox}
                />

                <ErrorMessage
                  name="type"
                  render={msg => {
                    return toast(msg, { toastId: '' });
                  }}
                />
                <div className={classNames(s.knobs, s.knobsTransactions)}></div>
                <div className={s.layer}></div>
              </div>
            </label>
            <span
              className={
                transactionType === '-'
                  ? classNames(s.outcomes, s.outcomesActive)
                  : s.outcomes
              }
            >
              {lang ? 'Outcomes' : 'Расход'}
            </span>
          </div>
          <Field
            type="text"
            name="newCategory"
            placeholder={
              lang ? 'Name of the new category' : 'Название новой категории'
            }
            disabled={category}
            className={s.newCategory}
            onChange={addCategory}
          />
          <ErrorMessage
            name="newCategory"
            render={msg => {
              return toast(msg, { toastId: '' });
            }}
          />
          <TransactionsCategoriesSelect
            onChange={onChangeCategory}
            lang={lang}
            newCategory={newCategory}
          />
          <div className={s.sumAndDateWrap}>
            <Field
              type="number"
              name="amount"
              className={s.sumInput}
              placeholder="0.00"
              value={amount}
              min="0"
              required
              onChange={amountChange}
            />
            <ErrorMessage
              name="amount"
              render={msg => {
                return toast(msg, { toastId: '' });
              }}
            />
            <Datetime
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              className={s.datetime}
              initialValue={currentDate}
              closeOnSelect={true}
              name="date"
              locale={lang ? 'en' : 'ru'}
              onChange={getDate}
            />
            <ErrorMessage
              name="date"
              render={msg => {
                return toast(msg, { toastId: '' });
              }}
            />
          </div>
          <Field
            type="text"
            name="comment"
            placeholder={lang ? 'Comment' : 'Комментарий'}
            className={s.commentInput}
          />

          <ErrorMessage
            name="comment"
            render={msg => {
              return toast(msg, { toastId: '' });
            }}
          />
          <div className={s.btnWrap}>
            <button
              type="submit"
              className={s.acceptBtn}
              onSubmit={() => {
                handleClose();
                dispatch(modalActions.modalAddTransactionClose());
              }}
            >
              {lang ? 'Add' : 'Добавить'}
            </button>
            <button
              type="button"
              className={s.cancelBtn}
              onClick={() => {
                handleClose();
                dispatch(modalActions.modalAddTransactionClose());
              }}
            >
              {lang ? 'Cancel' : 'Отмена'}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
ModalAddTransactions.propTypes = {
  handleClose: PropTypes.func.isRequired,
  lang: PropTypes.bool.isRequired,
};
