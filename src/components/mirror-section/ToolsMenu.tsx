import React, { useEffect, useState } from "react";
import ImageMirror from "./ImageMirror";
import { toolsTypes } from "../../types/toolsTypes";
import sharedPart from '../../assets/images/modifyPage/shareLogo.png'
import downloadPart from '../../assets/images/modifyPage/download.png'
import styles from './mirror.module.css'
import Image from "next/image";
import SharePopUp from "../popUps/share-popup";

export default function ToolsMenu({ data, onFlip }: toolsTypes) {
  const [image, setImage] = useState<string>('');
  const [sharePopUp, setSharePopUp] = useState<boolean>(false);
  useEffect(() => {
    const imgName: string | null = localStorage.getItem('image')
    if (imgName !== null) {
      setImage(imgName);
    }
  }, [])

  const SharePopup = (e: any) => {
    e.preventDefault()
    setSharePopUp(!sharePopUp)
  }
  const downloadImg = () => {
    onFlip({
      ...data,
      count: 1
    })
    if (data.url && data.count > 0) {
      const link = document.createElement('a');
      const ext = image?.split(';')[0].split('/')[1];
      link.download = `Mirrored.${ext}`;
      link.href = data.url;
      link.click()
    }
  }

  return (
    <div className={styles.toolsMenu}>
      <div>
        <div className={styles.toolsName}>
          <h2>Format settings</h2>
        </div>
        <div className={styles.tools}>
          <p className={styles.flipDirection}>Flip direction</p>
          <ImageMirror data={data} onFlip={onFlip} />
        </div>
      </div>
      <div className={styles.imageTools}>
        <button className={styles.shareImage} onClick={SharePopup}>
          <Image src={sharedPart} alt='Share Logo' width={18} height={18} />
          <span className={styles.buttonInfo}>
            Share image
          </span>
        </button>
        <button className={styles.downloadImage} onClick={downloadImg}>
          <div className={styles.downloadPart}>
            <Image src={downloadPart} alt='Download Logo' width={18} height={18} />
            <span className={styles.buttonInfo}>
              Download
            </span>
          </div>
        </button>
      </div>
      {sharePopUp
        ? <SharePopUp setSharePopUp={setSharePopUp} />
        : ''
      }
    </div>
  )
}