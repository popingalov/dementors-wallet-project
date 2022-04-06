import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import modalActions from '../../redux/global/global-actions';
import { Formik, Form } from 'formik';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import classNames from 'classnames';
import { store } from 'redux/store';
const modalRoot = document.getElementById('modal-root');
export default function Modal({ openModalButton, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { openModal, closeModal } = modalActions;

  const handleOpen = () => {
    dispatch(openModal());
    setIsOpen(store.getState().global.isModalLogOutOpen);
  };
  const handleClose = () => {
    dispatch(closeModal());
    setIsOpen(store.getState().global.isModalLogOutOpen);
  };
  const handleKeyDown = useCallback(e => {
    if (e.code === 'Escape') {
      dispatch(closeModal());
      setIsOpen(store.getState().isLoading.isModalLogOutOpen);
    }
  });

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
          isOpen ? classNames(s.modalWrap, s.modalWrapActive) : s.modalWrap
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
