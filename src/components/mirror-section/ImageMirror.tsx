import Image from "next/image";
import React from "react";
import { mirrorTypes } from "../../types/mirrorTypes";
import horizontal from '../../assets/images/modifyPage/flip-horizontal.png'
import vertical from '../../assets/images/modifyPage/flip-vertical.png'
import styles from './mirror.module.css'

export default function ImageMirror({ data, onFlip }: mirrorTypes) {
  // Mirror flip image horizontal
  const flipHorizontal = () => {
    onFlip(
      {
        ...data,
        count: data.count + 1,
        flipHorizontal: !data.flipHorizontal,
        flipVertical: data.flipVertical
      }
    );
  }
  // Mirror flip image vertical
  const flipVertical = () => {
    onFlip(
      {
        ...data,
        count: data.count + 1,
        flipHorizontal: data.flipHorizontal,
        flipVertical: !data.flipVertical
      }
    );
  }

  return (
    <div className={styles.flipButtons}>
      <button className={styles.flipHorizontal} onClick={flipHorizontal}>
        <div>
          <Image src={horizontal} alt='flip horizontal' width={27} height={26}/>
        </div>
        <span>Flip Horizontally</span>
      </button>
      <button className={styles.flipVertical} onClick={flipVertical}>
        <div>
          <Image src={vertical} alt='flip vertical' width={27} height={26}/>
        </div>
        <span>Flip Vertically</span>
      </button>
    </div>
  )
}