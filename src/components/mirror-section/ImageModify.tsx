import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { modifyTypes } from "../../types/modifyTypes";
import styles from "./mirror.module.css";
import refreshImage from "../../assets/images/modifyPage/newImage.png";
import deleteImg from "../../assets/images/modifyPage/delete.png";
import DeletePopUp from "../popUps/delete-popup";
import { Oval } from 'react-loader-spinner';
import { Stage, Layer, Image as IMG } from 'react-konva';

export default function ImageModify({ data, onFlip }: modifyTypes) {
  const [imageWH, setImageWH] = useState([780,520]); 
  const [image, setImage] = useState<string | null>(null);
  const [deletePopUp, setDeletePopUp] = useState<boolean>(false);
  const loader = useRef<HTMLDivElement>(null);
  const loaderImage = useRef<any>(null);
  const imgForDownload: any = useRef(null);

  useEffect(() => {
    const newImg = localStorage.getItem('image')
    if (newImg !== null) {
      setImage(newImg);
    }
  }, [])


  const img = new window.Image();
  img.src = image ? image : '';

  setTimeout(async () => {
    if (loader.current !== null && loaderImage.current !== null) {
      loader.current.style.display = 'none';
      loaderImage.current.style.display = 'block';
      imageResize(img, setImageWH)
    }
  }, 2000)

  const deletePopup = (e: any) => {
    e.preventDefault()
    setDeletePopUp(!deletePopUp)
  }

  useEffect(() => {
    if (data.count) {
      const url = imgForDownload.current.toDataURL();
      onFlip({
        ...data,
        url: url
      })
    }
  })

  return (
    <div className={styles.uploadedimage}>
      <div className={styles.processing} ref={loader}>
        <h2 className={styles.processingName}>Processing...</h2>
        <div className={styles.loaderPart}>
          <div className={styles.designLoader}></div>
          <div className={styles.loader}>
            <Oval
              height={80}
              width={80}
              color="rgb(74,187,252)"
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="lightgrey"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        </div>
      </div>
      <div className={styles.imagePart} ref={loaderImage}>
        <div className={styles.imageButtonPart}>
          <button>
            <Image src={refreshImage} alt='new Image' />
          </button>
          <button onClick={deletePopup} className={styles.deleteButton}>
            <Image src={deleteImg} alt='Delete Image' />
          </button>
        </div>
        <div className={styles.imageSuccess}>
          <Stage width={imageWH[0]} height={imageWH[1]} ref={imgForDownload} >
            <Layer>
              <IMG 
                image={img} 
                x={data.flipHorizontal ? imageWH[0] : 0} 
                y={data.flipVertical ? imageWH[1] : 0}
                scaleX={data.flipHorizontal ? -1 : 1}
                scaleY={data.flipVertical ? -1 : 1}
                width={imageWH[0]} 
                height={imageWH[1]}
              />
            </Layer>
          </Stage>
        </div>
      </div>
      {deletePopUp
        ? <DeletePopUp data={data} onFlip={onFlip} setDeletePopUp={setDeletePopUp} />
        : ''
      }
    </div>
  )
}

function imageResize(img: any, setImageWH: Function) {
  // Image Reasize logic
  let ratio, imgWidth, imgHeight;
  if (img.width > 780 && img.height > 520) { //If the width and height of the image are large in the canvas dimensions
    let divisionWidth = img.width / 780;
    let divisionHeight = img.height / 520;

    if (divisionWidth > divisionHeight) {
      ratio = (img.width - 780) / img.width;
      imgHeight = img.height - (img.height * ratio);
      setImageWH([780, imgHeight]);
    } else {
      ratio = (img.height - 520) / img.height;
      imgWidth = img.width - (img.width * ratio);
      setImageWH([imgWidth, 520]);
    }
  } else if (img.width > 780 || img.height > 520) { //If the width or height of the image in the canvas dimensions is large
    if (img.width > img.height) {
      ratio = ((img.width === 780 ? img.width + img.height : img.width) - 780) / img.width;
      imgHeight = img.height - (img.height * ratio);
      setImageWH([780, (img.width === 780 ? 520 : imgHeight)]);
    } else {
      ratio = (img.height - 520) / img.height;
      imgWidth = img.width - (img.width * ratio);
      setImageWH([imgWidth, 520]);
    }
  } else {
    setImageWH([img.width, img.height]);
  }
}