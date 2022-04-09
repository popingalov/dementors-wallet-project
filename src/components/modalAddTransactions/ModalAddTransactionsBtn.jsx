import s from './ModalAddTransactions.module.css';
import { useDispatch } from 'react-redux';
import btnIcon from '../../assets/images/icons/+.svg';

export default function ModalAddTransactionsBtn(handleOpen) {
  return (
    <button
      className={s.btn}
      onClick={() => {
        handleOpen();
      }}
    >
      <img
        src={btnIcon}
        alt="Click here to add a transaction"
        className={s.btnIcon}
      />
    </button>
  );
}
