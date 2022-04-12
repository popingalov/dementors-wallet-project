import s from './LoginVerificationModal.module.css';
export default function LoginVerificationModal() {
  return (
    <div className={s.loginVerificationModal}>
      <p>
        Вам на почту пришел PIN-код для подтверждения входа в приложение.
        Проверьте, пожалуйста, свой почтовый ящик и введите код в поле ниже.
      </p>

      <input
        type="text"
        name="pinCode"
        id="pinCode"
        placeholder="PIN-код"
        className={s.loginVerificationModal__input}
      />
      <button type="submit" className={s.loginVerificationModal__button}>
        Отправить
      </button>
    </div>
  );
}
