'use client'
import React from 'react'
import styles from './sidebar.module.scss'
import Logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavLinks = [`OverView`, `Accounts`, `Transactions`, `Reports`, `Settings `]

const Sidebar = () => {


  return (
    <div className={styles?.sidebarContainer}>
      <div className={styles?.sidebarLogo}>
        <Image src={Logo} alt='Logo' fill />
      </div>
    

      <div className={`${styles?.sidebarLinkContainer}`}>
      
        <ul className={styles?.sidebarLinks}>
          {
            NavLinks.map((link, index) => (
              <li key={index} className={`${styles?.sidebarLink}`}>
                <Link href={`#`}>{link}</Link>
              </li>
            ))
          }
      
      </ul>
      </div>
    </div>
  )
}

const SidebarMobile = ({ closing }) => {
 
  return (
    <div>
      <div className={`${styles?.sidebarMobileContainer} ${closing && styles.active}` }>
        <div className={styles?.sidebarMobileLogo}>
          <Image src={Logo} alt='logo' fill/>
        </div>
        

        <div className={`${styles?.sidebarLinkContainer}`}>
      
      <ul className={styles?.sidebarLinks}>
        {
          NavLinks.map((link, index) => (
            <li key={index} className={`${styles?.sidebarLink}`}>
              <Link href={`#`}>{link}</Link>
            </li>
          ))
        }
    
    </ul>
    </div>
      </div>
      <div className={styles?.bgSidebar} onClick={closing}>

      </div>
    </div>
  )
}

export { Sidebar, SidebarMobile }