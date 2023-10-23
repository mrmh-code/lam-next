import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'

const Button = ({text,url}:any) => {
  return (
    <div>
      <Link href={url}>
        <button className={styles.container} type='submit'>{text}</button>
      </Link>
    </div>
  )
}

export default Button
