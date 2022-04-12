






import { ModalLogOut } from 'components/modalLogOut';
import { ModalAddTransactions } from 'components/modalAddTransactions';


import classNames from "classnames";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import globalSelectors from "redux/global/global-selectors";
import modalActions from "../../redux/global/global-actions";
import s from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

export default function Modal() {
  const isModalOpen = useSelector(globalSelectors.isModalOpen);
  const isModalLogOutOpen = useSelector(globalSelectors.isModalLogOutOpen);
  const isAddTransactionModalOpen = useSelector(
    globalSelectors.isModalAddTransactionOpen,
  );
  const dispatch = useDispatch();

  // отпимуємо єкшени для тоглінгу статусу модалки із редаксу
  const { openModal, closeModal } = modalActions;

  // хендлер відкриття модалки
  const handleOpen = () => {
    dispatch(openModal());
  };
  const handleClose = () => {
    dispatch(closeModal());
  };
  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "Escape") {
        dispatch(closeModal());
      }
    },
    [dispatch, closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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
          onClick={(e) => {
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
    modalRoot
  );
}
