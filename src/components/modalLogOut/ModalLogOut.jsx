import s from './ModalLogOut.module.css';
import { useDispatch } from 'react-redux';
import logOut from '../../redux/auth/auth-operations';
export default function ModalLogOut(handleClose) {
  const dispatch = useDispatch();
  return (
    <>
      <p>Вы действительно хотите выйти?</p>
      <div className={s.btnWrap}>
        <button
          type="button"
          className={s.cancelBtn}
          onClick={() => {
            handleClose();
          }}
        >
          Нет
        </button>
        <button
          type="submit"
          className={s.acceptBtn}
          onSubmit={() => {
            handleClose();
            dispatch(logOut());
          }}
        >
          Да
        </button>
      </div>
    </>
  );
}
