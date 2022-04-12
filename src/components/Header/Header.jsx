import { Link } from 'react-router-dom';
import Container from 'components/сontainer';
import { ReactComponent as LogoIcon } from 'assets/images/icons/logo.svg';
import s from './Header.module.css';
import { ModalLogOutBtn } from 'components/modalLogOut';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContainer}>
          <Link className={s.logoLink} to="/">
            <LogoIcon className={s.logoIcon} />
          </Link>

          <div className={s.rightContainerWrap}>
            <span className={s.userName}>Имя</span>
            <ModalLogOutBtn />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
