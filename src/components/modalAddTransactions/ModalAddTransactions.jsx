import s from './ModalAddTransactions.module.css';
import React from 'react';
import './ModalAddTransactions.module.css';
import 'react-datetime/css/react-datetime.css';
import { useDispatch } from 'react-redux';
import Datetime from 'react-datetime';
import closeBtnIcon from '../../assets/images/icons/close.svg';
import classNames from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TransactionsCategoriesSelect from './TransactionsCategoriesSelect';
import modalActions from '../../redux/global/global-actions';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useState } from 'react';
import clasNames from 'classnames';
let schema = yup.object().shape({
  transactionType: yup
    .string()
    .default('outcomes')
    .required(
      "Выберите тип транзакции 'Доход' или  'Расходы'. Это обязательное поле ",
    ),
  sum: yup
    .string()
    .max(10)
    .default('0.00')
    .required('Введите сумму. Это обязательное поле'),

  dateOfTransaction: yup
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
  category: yup.string(),
  newCategory: yup
    .string()
    .max(15, 'Максимально допустимая длинна названия 15 символов'),
});

const today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
let currentDate = dd + '.' + mm + '.' + yyyy;

const initialValues = {
  transactionType: '',
  sum: '',
  dateOfTransaction: '',
  comment: '',
  category: '',
  newCategory: '',
};

export default function ModalAddTransactions({ handleClose }) {
  const [transactions, setTransactions] = useState(initialValues);
  const [date, setDate] = useState(currentDate);
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('outcomes');
  const dispatch = useDispatch();

  const handleCheckbox = e => {
    e.target.checked === true
      ? setTransactionType('incomes')
      : setTransactionType('outcomes');
  };

  const onChangeCategory = e => {
    return setCategory(e.value);
  };

  const getDate = e => {
    return setDate(
      `${String(e.date()).padStart(2, '0')}.${String(e.month() + 1).padStart(
        2,
        '0',
      )}.${e.year()}`,
    );
  };
  const addCategory = e => {
    return e.target.value;
  };
  const sumChange = e => {
    return setSum(e.target.value);
  };
  const sumForSending = sum => {
    if (Number.isInteger(Number(sum)) === true) {
      return sum + '.00';
    } else return sum;
  };

  console.log(transactions);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          setTransactions({
            transactionType: transactionType,
            sum: sumForSending(sum),
            dateOfTransaction: date,
            comment: values.comment,
            category: category,
            newCategory: values.newCategory,
          });
          setSum('');
          setCategory('');
          setDate('');
          setTransactionType('outcomes');
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
            <label htmlFor="transactionType">
              <span
                className={
                  transactionType === 'incomes'
                    ? classNames(s.incomes, s.incomesActive)
                    : s.incomes
                }
              >
                Доход
              </span>
              <div className={classNames(s.button, s.r)} id={s['button-2']}>
                <Field
                  type="checkbox"
                  className={s.checkbox}
                  name="transactionType"
                  onClick={handleCheckbox}
                />

                <ErrorMessage
                  name="transactionType"
                  render={msg => {
                    return toast(msg, { toastId: '' });
                  }}
                />
                <div className={s.knobs}></div>
                <div className={s.layer}></div>
              </div>
              <span
                className={
                  transactionType === 'outcomes'
                    ? clasNames(s.outcomes, s.outcomesActive)
                    : s.outcomes
                }
              >
                Расход
              </span>
            </label>
          </div>
          <Field
            type="text"
            name="newCategory"
            placeholder="Название новой категории"
            className={s.newCategory}
            onBlur={addCategory}
          />
          <ErrorMessage
            name="newCategory"
            render={msg => {
              return toast(msg, { toastId: '' });
            }}
          />
          <button
            type="button"
            name="newCategoryBtn"
            className={s.newCategoryBtn}
            onClick={() => {
              addCategory();
            }}
          />
          <TransactionsCategoriesSelect onChange={onChangeCategory} />
          <div className={s.sumAndDateWrap}>
            <Field
              type="number"
              name="sum"
              className={s.sumInput}
              placeholder="0.00"
              value={sum}
              required
              onChange={sumChange}
            />
            <ErrorMessage
              name="sum"
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
              name="dateOfTransaction"
              onChange={getDate}
            />
            <ErrorMessage
              name="dateOfTransaction"
              render={msg => {
                return toast(msg, { toastId: '' });
              }}
            />
          </div>
          <Field
            type="text"
            name="comment"
            placeholder="Комментарий"
            className={s.commentInput}
          />

          <ErrorMessage
            name="comment"
            render={msg => {
              return toast(msg, { toastId: '' });
            }}
          />
          <div className={s.btnWrap}>
            <button type="submit" className={s.acceptBtn}>
              Добавить
            </button>
            <button
              type="button"
              className={s.cancelBtn}
              onClick={() => {
                handleClose();
                dispatch(modalActions.modalAddTransactionClose());
              }}
            >
              Отмена
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
