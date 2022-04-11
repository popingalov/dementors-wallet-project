import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import modalActions from '../../redux/global/global-actions';
import globalSelectors from 'redux/global/global-selectors';

import s from './Modal.module.css';
import classNames from 'classnames';
import { ModalLogOut } from 'components/modalLogOut';
import { ModalAddTransactions } from 'components/modalAddTransactions';
const modalRoot = document.getElementById('modal-root');

export default function Modal() {
  const isModalOpen = useSelector(globalSelectors.isModalOpen);
  const isModalLogOutOpen = useSelector(globalSelectors.isModalLogOutOpen);
  const isAddTransactionModalOpen = useSelector(
    globalSelectors.isModalAddTransactionOpen,
  );
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
          {isModalLogOutOpen && <ModalLogOut handleClose={handleClose} />}
          {isAddTransactionModalOpen && (
            <ModalAddTransactions handleClose={handleClose} />
          )}
        </div>
      </div>
    </>,
    modalRoot,
  );
}
