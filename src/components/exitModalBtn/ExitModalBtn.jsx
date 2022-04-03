import s from './ExitModalBtn.module.css';
export default function ExitModalBtn(handleOpen) {
  console.log(handleOpen);
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
