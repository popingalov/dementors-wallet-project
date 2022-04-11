import s from './Balance.module.css';
export default function Balance() {
  return (
    <>
      <div className={s.container}>
        <span className={s.text}>ВАШ БАЛАНС</span>
        <p className={s.balance}>₴24000</p>
      </div>
    </>
  );
}
