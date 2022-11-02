import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './header.module.css'
import colorPart from '../../assets/images/color.png'
import convertPart from '../../assets/images/convert.png'
import designPart from '../../assets/images/design.png'
import imagesPart from '../../assets/images/images.png'
import pdfPart from '../../assets/images/pdf.png'
import iconMenu from '../../assets/images/icon_menu.png'
import quickToolPart from '../../assets/images/quickTool.png'
import searchPart from '../../assets/images/search.png'
import sharedPart from '../../assets/images/shared.png'
import videosPart from '../../assets/images/videos.png'
import textPart from '../../assets/images/text.png'


export const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerPart1}>
        {/* <div className={styles.iconMenupart}>
          <Image src={iconMenu} alt='quickToolPart' />
        </div> */}
          <div className={styles.headerPart2}>
            <div className={styles.quickToolPart}>
              <Image src={quickToolPart} alt='quickToolPart' />
            </div>
          </div>
          <div className={styles.convertPart}>
              <Image src={convertPart} alt='convertPart'/>
          </div>
          <div className={styles.imagesPart}>
              <Image src={imagesPart} alt='imagesPart'/>
          </div>
          <div className={styles.pdfPart}>
              <Image src={pdfPart} alt='pdf'/>    
          </div>
          <div className={styles.textPart}>
              <Image src={textPart} alt='text'/>
          </div>
          <div className={styles.videosPart}>
              <Image src={videosPart} alt='videos'/>
          </div>
          <div className={styles.designPart}>
              <Image src={designPart} alt='design'/>
          </div>
          <div className={styles.colorPart}>
              <Image src={colorPart} alt='color'/>
          </div>
      </div>
      <div className={styles.headerPart3}>
        <div className={styles.searchPart}>
          <Image src={searchPart} alt='search' />
        </div>
        <div className={styles.sharedPart}>
          <Image src={sharedPart} alt='shared' />
        </div>
      </div>
    </header>
  )
}
