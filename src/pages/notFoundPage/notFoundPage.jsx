import { Link } from "react-router-dom";
import s from "./notFoundPage.module.css"
import PropTypes from "prop-types";

const NotFoundPage = (type,onClick) => {
  return(
    <div className={s.wrapper}>
      <div className={s.box}>
      <p className={s.title}>
        <span class={s.accent}>Error 404.	
          &#160;</span>&#10;	

        Page not found</p>
      <div className={s.wrapper_btn} >
        <Link to='/home'>
          <button className={s.btn} type='button' onClick={onClick}>
            Go back
          </button>
          </Link>
        </div>
      </div>
      
        
    </div>
  );
}

NotFoundPage.prototypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
}

export default NotFoundPage