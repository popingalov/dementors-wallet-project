import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'components/сontainer';
import { ReactComponent as LogoIcon } from 'assets/images/icons/logo.svg';
import styles from '../modalAddTransactions/ModalAddTransactions.module.css';
import s from './Header.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import modalActions from '../../redux/global/global-actions';
import { ModalLogOutBtn } from 'components/modalLogOut';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
const Header = ({ lang }) => {
  const dispatch = useDispatch();
  const { changeLanguage } = modalActions;
  const userName = useSelector(authSelectors.getUsername);
  const handleCheckbox = e => {
    e.target.checked === true
      ? dispatch(changeLanguage(true))
      : dispatch(changeLanguage(false));
  };
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContainer}>
          <Link className={s.logoLink} to="/">
            <LogoIcon className={s.logoIcon} />
          </Link>
          <div className={classNames(styles.checkboxWrap, s.checkboxWrap)}>
            <span
              style={{ position: 'unset' }}
              className={
                lang === true
                  ? classNames(styles.incomes, styles.incomesActive)
                  : styles.incomes
              }
            >
              English
            </span>
            <label htmlFor="lang">
              <div
                className={classNames(styles.button, styles.r, s.button, s.r)}
                id={styles['button-2']}
              >
                <input
                  type="checkbox"
                  className={classNames(styles.checkbox, s.checkbox)}
                  name="lang"
                  onClick={handleCheckbox}
                />

                <div className={classNames(styles.knobs, s.knobs)}></div>
                <div className={classNames(styles.layer, s.layer)}></div>
              </div>
            </label>
            <span
              style={{ position: 'unset' }}
              className={
                lang === false
                  ? classNames(styles.outcomes, styles.outcomesActive)
                  : styles.outcomes
              }
            >
              Русский
            </span>
          </div>
          <div className={s.rightContainerWrap}>
            <span className={s.userName}>{userName}</span>
            <ModalLogOutBtn lang={lang} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
Header.propTypes = {
  lang: PropTypes.bool.isRequired,
};
