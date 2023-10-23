import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
export default function Home() {
  return (
     <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products </h1>
        <p className={styles.desc}>
          Turning your idea into reality. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, neque.
        </p>

        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloribus nisi voluptate magnam perferendis consectetur eveniet maiores saepe laboriosam distinctio.</p>

        <button className={styles.button}>See our Works</button>
      </div>

        <div className={styles.item}>
          <Image className={styles.img} src={Hero} alt=''/>
        </div>
       
     </div>
  )
}
