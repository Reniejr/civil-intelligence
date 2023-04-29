import Image from 'next/image'
import React from 'react'

import STARS from '../../../assets/STARS.jpg'

import styles from '../styles/MainBg.module.scss'

const MainBg = () => {
  return (
    <div className={styles["bg"]} id={styles["main-bg"]}>
        <Image
            src={STARS}
            alt="stars-image"
            width={1440}
            height={1024}
            className={styles["stars-image"]}
        />
        <div className={styles["dark-layer"]}></div>
    </div>
  )
}

export default MainBg