import React, { useState, useCallback, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import classNames from 'classnames';
const modalRoot = document.getElementById('modal-root');
export default function Modal({ openModalButton, content }) {
  const [modalActive, setModalActive] = useState(false);
  const handleOpen = () => {
    setModalActive(true);
  };
  const handleClose = () => setModalActive(false);
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        setModalActive(false);
      }
    },
    [modalActive],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  return createPortal(
    <>
      {openModalButton(handleOpen)}
      <div
        className={
          modalActive === true
            ? classNames(s.modalWrap, s.modalWrapActive)
            : s.modalWrap
        }
        onClick={() => {
          handleClose();
        }}
      >
        <div
          className={s.exitModal}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <Formik>
            <Form>{content(handleClose)}</Form>
          </Formik>
        </div>
      </div>
    </>,
    modalRoot,
  );
}
Modal.propTypes = {
  openModalButton: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
};
