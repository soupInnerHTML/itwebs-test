import React from 'react'
import styles from "./Modal.module.scss";
import {openModal} from "@/lib/utils/modal";


export const Modal = () => {

  return (
    <button
      onClick={openModal}
      className={styles.modalButton}
    >
      Modal
    </button>
  );
};