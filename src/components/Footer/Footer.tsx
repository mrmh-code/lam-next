import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
    <div>2023 Lamamia. All rights reserved </div>

    <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} alt='Lam Dev'/>
        <Image src='/1.png' width={15} height={15} alt='Lam Dev'/>
        <Image src='/1.png' width={15} height={15} alt='Lam Dev'/>
        <Image src='/1.png' width={15} height={15} alt='Lam Dev'/>
    </div>

    </div>
  )
}

export default Footer
