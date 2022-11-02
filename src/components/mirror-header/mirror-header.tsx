import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './mirror-header.module.css'
import mirrorLogo from '../../assets/images/modifyPage/mirror_logo.png'
import sharedPart from '../../assets/images/shared.png'


export const MirrorHeader: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerPart1}>
          <div className={styles.quickToolPart}>
          <Image src={mirrorLogo} alt='quickToolPart' />
          </div>
      </div>
      <div className={styles.headerPart2}>
        <div className={styles.sharedPart}>
          <Image src={sharedPart} alt='shared' />
        </div>
      </div>
    </header>
  )
}
