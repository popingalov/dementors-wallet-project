import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import modalActions from '../../redux/global/global-actions';
import globalSelectors from 'redux/global/global-selectors';
import { Formik, Form } from 'formik';
import s from './Modal.module.css';
import classNames from 'classnames';

const modalRoot = document.getElementById('modal-root');
export default function Modal({ openModalButton, content }) {
  const isModalOpen = useSelector(globalSelectors.isModalOpen);

  const dispatch = useDispatch();
  const { openModal, closeModal } = modalActions;

  const handleOpen = () => {
    dispatch(openModal());
  };
  const handleClose = () => {
    dispatch(closeModal());
  };
  const handleKeyDown = useCallback(e => {
    if (e.code === 'Escape') {
      dispatch(closeModal());
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
          isModalOpen ? classNames(s.modalWrap, s.modalWrapActive) : s.modalWrap
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
