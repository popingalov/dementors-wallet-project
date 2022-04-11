import s from './ModalLogOut.module.css';
import { useDispatch } from 'react-redux';
import modalActions from 'redux/global/global-actions';
import '../header/Header.module.css';
import { ReactComponent as ExitIcon } from 'assets/images/icons/exit.svg';
import classNames from 'classnames';
export default function ModalLogOutBtn() {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(modalActions.openModal());
  };
  return (
    <button
      className={classNames('logOutBtn')}
      onClick={() => {
        dispatch(modalActions.modalAddTransactionClose());
        dispatch(modalActions.modalLogOutOpen());
        handleOpen();
      }}
    >
      <ExitIcon className={'exitIcon'} />
      <span className={'logOutBtnText'}>Выйти</span>
    </button>
  );
}
