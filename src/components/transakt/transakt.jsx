// import s from './ModalAddTransactions.module.css';
// import './ModalAddTransactions.module.css';
import 'react-datetime/css/react-datetime.css';
import { useDispatch } from 'react-redux';
import Datetime from 'react-datetime';
import closeBtnIcon from '../../assets/images/icons/close.svg';
import classNames from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import TransactionsCategoriesSelect from './TransactionsCategoriesSelect';
// import modalActions from '../../redux/global/global-actions';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useState } from 'react';
const schema = yup.object().shape({
  addTransactionCheckbox: yup.boolean().default(true).required(),
  sum: yup.string(),
  dateOfTransaction: yup.date().default(() => {
    new Date();
  }),
  comment: yup.string().max(20),
  category: yup.string(),
  newCategory: yup.string(),
});

const today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
let currentDate = dd + '.' + mm + '.' + yyyy;

const initialValues = {
  addTransactionCheckbox: '',
  sum: '',
  dateOfTransaction: '',
  comment: '',
  category: '',
  newCategory: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={msg => {
        return toast(msg, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
      }}
    />
  );
};
export default function ModalAddTransactions({ handleClose }) {
  const [transactions, setTransactions] = useState(initialValues);
  const [date, setDate] = useState(currentDate);
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const [inputCheckbox, setInputCheckbox] = useState('outcomes');

  const handleCheckbox = e => {
    return e.target.value === true
      ? setInputCheckbox('incomes')
      : setInputCheckbox('outcomes');
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
    console.log(e.target.value);
    console.log(Number.isInteger(e.target.value));
    return setSum(e.target.value);
  };

  console.log(transactions);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          setTransactions({
            addTransactionCheckbox: inputCheckbox,
            sum: sum.replace(sum[sum.length - 2], '.' + sum[sum.length - 2]),
            dateOfTransaction: date,
            comment: values.comment,
            category: category,
            newCategory: values.newCategory,
          });
          resetForm();
          setSum('');
          setCategory('');
          setDate('');
        }}
      >
        <Form autoComplete="off">
          <button
            type="button"
            onClick={() => {
              handleClose();
              //   dispatch(modalActions.modalAddTransactionClose());
            }}
            // className={s.closeBtn}
          >
            <img src={closeBtnIcon} alt="Close" />
          </button>
          <p className={s.title}>Добавить транзакцию</p>
          <div className={s.checkboxWrap}>
            <label htmlFor="addTransactionCheckbox">
              <span className={s.incomes}>Доход</span>
              <div className={classNames(s.button, s.r)} id={s['button-2']}>
                <Field
                  type="checkbox"
                  className={s.checkbox}
                  name="addTransactionCheckbox"
                  onClick={handleCheckbox}
                />
                <FormError name="addTransactionCheckbox" />
                <div className={s.knobs}></div>
                <div className={s.layer}></div>
              </div>
              <span className={s.outcomes}>Расход</span>
            </label>
          </div>
          <Field
            type="text"
            name="newCategory"
            placeholder="Введите название новой категории"
            className={s.newCategory}
            onBlur={addCategory}
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
              maxLength="6"
              onChange={sumChange}
            />
            <FormError name="sum" />
            <Datetime
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              className={s.datetime}
              initialValue={currentDate}
              closeOnSelect={true}
              name="dateOfTransaction"
              onChange={getDate}
            />
            <FormError name="dateOfTransaction" />
          </div>
          <Field
            type="text"
            name="comment"
            placeholder="Комментарий"
            className={s.commentInput}
          />
          <ErrorMessage name="comment" />
          <div className={s.btnWrap}>
            <button
              type="submit"
              className={s.acceptBtn}
              onClick={() => {
                // dispatch(modalActions.modalAddTransactionClose());
                // handleClose();
              }}
            >
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
