import s from './backgroundContainer.module.css';

const BackgroundContainer = ({children}) => {
  return  <div className={s.container}>{children}</div>;
};

export default BackgroundContainer;