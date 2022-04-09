import s from './ModalLogOut.module.css';
export default function ModalLogOutBtn(handleOpen) {
  return (
    <button
      className={s.btn}
      onClick={() => {
        handleOpen();
      }}
    >
      Выйти
    </button>
  );
}
