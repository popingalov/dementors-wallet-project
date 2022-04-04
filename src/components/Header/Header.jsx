import { Link } from 'react-router-dom';
import Container from 'components/container';
import { ReactComponent as LogoIcon } from 'assets/images/icons/logo.svg';
import { ReactComponent as ExitIcon } from 'assets/images/icons/exit.svg';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container additionalClasses={[s.headerContainer]}>
        <Link className={s.logoLink} to="/">
          <LogoIcon className={s.logoIcon} />
        </Link>

        <div className={s.rightContainerWrap}>
          <span className={s.userName}>Имя</span>
          <button className={s.logOutBtn} type="button">
            <ExitIcon className={s.exitIcon} />
            <span className={s.logOutBtnText}>Выйти</span>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
