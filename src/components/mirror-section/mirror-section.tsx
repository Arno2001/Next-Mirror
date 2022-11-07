import type { NextPage } from 'next'
import { useReducer, useRef } from 'react';
import { actionTypes } from '../../types/reducerTypes';
import Reducer from './AppReducer';
import ImageModify from './ImageModify'
import styles from './mirror.module.css'
import ToolsMenu from './ToolsMenu';


export const MirrorSection: NextPage = () => {
  const [data, dispatch]: any & actionTypes = useReducer<any>(Reducer, []);
  const imgRef = useRef(null);

  const onFlipFunc = (flip: boolean) => {
    dispatch({
      type: 'flip',
      payload: {
        updated: flip
      }
    });
  }
  return (
    <div className={styles.modify} >
      < div className={styles.modifyPart} >
        <ImageModify data={data} onFlip={onFlipFunc} imgRef={imgRef} />
      </div>
      < div className={styles.settingsPart} >
        <ToolsMenu data={data} onFlip={onFlipFunc} imgRef={imgRef} />
      </div>
    </div>
  )
}