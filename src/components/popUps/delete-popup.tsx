import Image from "next/image";
import React from "react";
import deleteImg from "../../assets/images/modifyPage/delete.png";
import styles from "./popup.module.css";
import { deleteTypes } from "../../types/deleteTypes";

export default function DeletePopUp({ setDeletePopUp }: deleteTypes) {
  // Image Delete and readirect default root 
  const deleteImage = () => {
    localStorage.clear();
  }

  const cancleDelete = () => {
    setDeletePopUp(false)
  }

  return (
    <div className={styles.deletePart}>
      <div className={styles.deletePopUp}>
        <div className={styles.deleteDescription}>
          <div className={styles.deleteHeader}>
            <Image src={deleteImg} alt='delete logo' width={24} height={24} />
            <span className={styles.deleteName}>Delete Image?</span>
          </div>
          <span className={styles.deleteInfo}>This action is permanent and cant be undone.</span>
        </div>
        <div className={styles.deleteButtons}>
          <button className={styles.cancelDelete} onClick={cancleDelete}>Cancle</button>
          <button className={styles.confirmDelete} onClick={deleteImage}><a href={'/'}>Delete</a></button>
        </div>
      </div>
    </div>
  )
}