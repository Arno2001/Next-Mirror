import type { NextPage } from 'next'
import { ImageUpload } from './imageUpload'
import styles from './section.module.css'


export const Section: NextPage = () => {
    return (
        <div className={styles.sectionPart}>
            <div className={styles.processPart}>
                <ImageUpload />
            </div>
        </div>
    )
}


