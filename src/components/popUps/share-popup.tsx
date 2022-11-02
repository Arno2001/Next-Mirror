import Image from "next/image";
import React, { useEffect, useState } from "react";
import copyLogo from "../../assets/images/modifyPage/copy.png";
import copied from "../../assets/images/modifyPage/copied.png";
import closeLogo from "../../assets/images/modifyPage/close.png";
import styles from "./popup.module.css";
import QRCode from "react-qr-code";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, MailruIcon, MailruShareButton, TwitterIcon, TwitterShareButton } from "next-share";
import { shareType } from "../../types/shareType";

export default function SharePopUp({ setSharePopUp }: shareType) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const imgName: string | null = localStorage.getItem('image')
    if (imgName !== null) {
      // setShareUrl(url.slice(1, url.length - 1));
      setImage(imgName);
    }
  }, [])

  const copyValue = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(`${shareUrl}`)
  }

  const closeShare = () => {
    setSharePopUp(false)
  }
  return (
    <div className={styles.sharePart}>
      <div className={styles.sharePopUp}>
        <div className={styles.shareImagePart}>
          <Image src={image ? image : ''} alt='image' width={335} height={445} objectFit='contain'/>
        </div>
        <div className={styles.shareTools}>
          <button className={styles.shareClose} onClick={closeShare}>
            <Image src={closeLogo} alt='close logo' />
          </button>
          <div className={styles.shareHeader}>
            <span className={styles.shareName}>Share the results</span>
          </div>
          <div className={styles.shareLink}>
            <p className={styles.shareDescription}>Share download link</p>
            <div className={styles.shareLinkInfo}>
              <span className={styles.linkSpan}>
                {shareUrl ? shareUrl : ''}
              </span>
              <button className={styles.copyPart} onClick={copyValue}>
                <Image src={isCopied ? copied : copyLogo} alt='copy logo' width={isCopied ? 14 : 16} height={isCopied ? 14 : 16} />
                <span>{isCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className={styles.shareLinkSocial}>
              <FacebookShareButton url={shareUrl ? shareUrl : ''} style={{ marginRight: '16px' }}>
                <FacebookIcon size={40} borderRadius={50} color={'black'} />
              </FacebookShareButton>
              <LinkedinShareButton url={shareUrl ? shareUrl : ''} style={{ marginRight: '16px' }}>
                <LinkedinIcon size={40} borderRadius={50} />
              </LinkedinShareButton>
              <TwitterShareButton url={shareUrl ? shareUrl : ''} style={{ marginRight: '16px' }}>
                <TwitterIcon size={40} borderRadius={50} bgStyle={{ backgroundColor: 'rgba(25, 119, 243, 0.1)' }} />
              </TwitterShareButton>
              <MailruShareButton url={shareUrl ? shareUrl : ''}>
                <MailruIcon size={40} borderRadius={50} bgStyle={{ backgroundColor: 'rgba(25, 119, 243, 0.1)' }} />
              </MailruShareButton>
            </div>
            <div className={styles.shareQr}>
              <span className={styles.shareQrInfo}>Scan QR code to download!</span>
              <QRCode value={shareUrl ? shareUrl : ''} size={120} level={'Q'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}