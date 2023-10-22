'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const links=[
    {
        id:1,
        title:"Home",
        url:'/'
    },
    {
        id:2,
        title:"Protfolio",
        url:'/protfolio'
    },
    {
        id:3,
        title:"Blog",
        url:'/blog'
    },
    {
        id:4,
        title:"About",
        url:'/about'
    },
    {
        id:5,
        title:"Contact",
        url:'/contact'
    },
    {
        id:6,
        title:"Dashboard",
        url:'/dashboard'
    },
]


const Navbar = () => {
  return (
    <div className={styles.conatiner}>
      <Link href='/' className={styles.logo}>LAM</Link>
      <div className={styles.links}>
        {
            links.map(link=>(
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))
        }

        <button className={styles.logout} onClick={()=>{
           console.log('logged out') 
        }}>
            Log out
        </button>
      </div>
    </div>
  )
}

export default Navbar