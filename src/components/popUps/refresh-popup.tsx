import React from "react";
import styles from "./popup.module.css";
import { refreshTypes } from "../../types/refreshTypes";

export default function RefreshPopUp({ setRefreshPopUp }: refreshTypes) {
  const refreshImage = () => {
    localStorage.clear();
  }

  const cancleRefresh = () => {
    setRefreshPopUp(false)
  }

  return (
    <div className={styles.refreshPart}>
      <div className={styles.refreshPopUp}>
        <span className={styles.refreshName}>Start over with a new file?</span>
        <div className={styles.refreshButtons}>
          <button className={styles.cancelRefresh} onClick={cancleRefresh}>Cancle</button>
          <button className={styles.confirmRefresh} onClick={refreshImage}><a href={'/'}>Start over</a></button>
        </div>
      </div>
    </div>
  )
}