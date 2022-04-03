import s from './ExitModal.module.css';
export default function ExitModal(handleClose) {
  console.log(handleClose);
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
        <button type="submit" className={s.acceptBtn} onSubmit={() => {}}>
          Да
        </button>
      </div>
    </>
  );
}
