/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { modifyTypes } from "../../types/modifyTypes";
import styles from "./mirror.module.css";
import refreshImage from "../../assets/images/modifyPage/newImage.png";
import deleteImg from "../../assets/images/modifyPage/delete.png";
import toggle from "../../assets/images/modifyPage/toggle.gif";
import DeletePopUp from "../popUps/delete-popup";
import RefreshPopUp from "../popUps/refresh-popup";

export default function ImageModify({ data, onFlip, imgRef }: modifyTypes) {
  const [image, setImage] = useState<string | null>(null);
  const [deletePopUp, setDeletePopUp] = useState<boolean>(false);
  const [refreshPopUp, setRefreshPopUp] = useState<boolean>(false);
  const loader = useRef<HTMLDivElement>(null);
  const loaderImage = useRef<any>(null);

  useEffect(() => {
    const newImg = localStorage.getItem('image')
    if (newImg !== null) {
      setImage(newImg);
    }
  }, [])
  
  setTimeout(() => {
    if (loader.current !== null && loaderImage.current !== null) {
      loader.current.style.display = 'none';
      loaderImage.current.style.display = 'block';
    }
  }, 3000)

  const refreshPopup = (e: any) => {
    e.preventDefault()
    setRefreshPopUp(!refreshPopUp)
  }

  const deletePopup = (e: any) => {
    e.preventDefault()
    setDeletePopUp(!deletePopUp)
  }

  return (
    <div className={styles.uploadedimage}>
      <div className={styles.processing} ref={loader}>
        <h2 className={styles.processingName}>Processing...</h2>
        <div className={styles.loaderPart}>
          <div className={styles.designLoader}></div>
          <div className={styles.loader}>
            <Image src={toggle} alt='loader gif' width={90} height={90}/>
          </div>
        </div>
      </div>
      <div className={styles.imagePart} ref={loaderImage}>
        <div className={styles.imageButtonPart}>
          <button onClick={refreshPopup} className={styles.deleteButton}>
            <Image src={refreshImage} alt='New Image' />
          </button>
          <button onClick={deletePopup} className={styles.deleteButton}>
            <Image src={deleteImg} alt='Delete Image' />
          </button>
        </div>
        <div className={styles.imageSuccess}>
          <img src={data.imgPath ? data.imgPath : image} alt="Mirror Image" ref={imgRef} className={styles.imageMirroring} />
        </div>
      </div>
      {deletePopUp
        ? <DeletePopUp setDeletePopUp={setDeletePopUp} />
        : ''
      }

      {refreshPopUp
        ? <RefreshPopUp setRefreshPopUp={setRefreshPopUp} />
        : ''
      }
    </div>
  )
}