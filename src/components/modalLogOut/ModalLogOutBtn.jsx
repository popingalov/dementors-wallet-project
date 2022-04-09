import s from './ModalLogOut.module.css';
import { useDispatch } from 'react-redux';
import modalActions from 'redux/global/global-actions';
export default function ModalLogOutBtn() {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(modalActions.openModal());
  };
  return (
    <button
      className={s.btn}
      onClick={() => {
        dispatch(modalActions.modalAddTransactionClose());
        dispatch(modalActions.modalLogOutOpen());
        handleOpen();
      }}
    >
      Выйти
    </button>
  );
}
