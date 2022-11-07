import Image from "next/image";
import React, { useState } from "react";
import { mirrorTypes } from "../../types/mirrorTypes";
import horizontal from '../../assets/images/modifyPage/flip-horizontal.png'
import vertical from '../../assets/images/modifyPage/flip-vertical.png'
import styles from './mirror.module.css'

export default function ImageMirror({ data, onFlip, imgRef }: mirrorTypes) {
  // Mirror flip image horizontal
  const flipHorizontal = () => {
    getMirroredImg(imgRef, true, false);
  }
  // Mirror flip image vertical
  const flipVertical = () => {
    getMirroredImg(imgRef, false, true);
  }

  const getMirroredImg = (image: any, flipHorizontal: boolean, flipVertical: boolean) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scaleX = flipHorizontal === true ? -1 : 1;
    const scaleY = flipVertical === true ? -1 : 1
    const x = flipHorizontal ? -image.naturalWidth : 0;
    const y = flipVertical ? -image.naturalHeight : 0;
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    if (ctx) {
      ctx.scale(scaleX, scaleY);
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(
        image,
        x,
        y,
        image.naturalWidth,
        image.naturalHeight,
      );
    }
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Canvas is empty');
        return;
      }
      onFlip({
        ...data,
        count: data.count + 1,
        imgPath: window.URL.createObjectURL(blob),
        flipHorizontal: flipHorizontal,
        flipVertical: flipVertical
      })
    })
  }

  return (
    <div className={styles.flipButtons}>
      <button className={styles.flipHorizontal} onClick={flipHorizontal}>
        <div>
          <Image src={horizontal} alt='flip horizontal' width={27} height={26} />
        </div>
        <span>Flip Horizontally</span>
      </button>
      <button className={styles.flipVertical} onClick={flipVertical}>
        <div>
          <Image src={vertical} alt='flip vertical' width={27} height={26} />
        </div>
        <span>Flip Vertically</span>
      </button>
    </div>
  )
}

// function imageResize(img: any) {
//   // Image Reasize logic
//   let ratio, imgWidth, imgHeight;
//   if (img.naturalWidth > img.width && img.naturalHeight > img.height) { //If the width and height of the image are large in the canvas dimensions
//     let divisionWidth = img.naturalWidth / img.width;
//     let divisionHeight = img.naturalHeight / img.height;
//     if (divisionWidth > divisionHeight) {
//       ratio = (img.naturalWidth - img.width) / img.naturalWidth;
//       imgHeight = img.naturalHeight - (img.naturalHeight * ratio);
//       return [img.width, imgHeight];
//     } else {
//       ratio = (img.naturalHeight - img.height) / img.naturalHeight;
//       imgWidth = img.naturalWidth - (img.naturalWidth * ratio);
//       return [imgWidth, img.height];
//     }
//   } else if (img.naturalWidth > img.width || img.naturalHeight > img.height) { //If the width or height of the image in the canvas dimensions is large
//     if (img.naturalWidth > img.naturalHeight) {
//       ratio = ((img.naturalWidth === img.width ? img.naturalWidth + img.naturalHeight : img.naturalWidth) - img.width) / img.naturalWidth;
//       imgHeight = img.naturalHeight - (img.naturalHeight * ratio);
//       return [img.width, (img.naturalWidth === img.width ? img.height : imgHeight)];
//     } else {
//       ratio = (img.naturalHeight - img.height) / img.naturalHeight;
//       imgWidth = img.naturalWidth - (img.naturalWidth * ratio);
//       return [imgWidth, img.height];
//     }
//   } else {
//     return [img.naturalWidth, img.naturalHeight];
//   }
// }