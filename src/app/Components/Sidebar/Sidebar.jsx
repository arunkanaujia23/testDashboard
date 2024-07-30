'use client'
import React from 'react'
import styles from './sidebar.module.scss'
// import Logo from '@/assets/images/business/logo.svg'
import Image from 'next/image'
// import DashboardIcon from './SVGIcon/DashboardIcon'
// import ReviewsIcon from './SVGIcon/ReviewsIcon'
// import SubscriptionsIcon from './SVGIcon/SubscriptionsIcon'
// import AccountsIcon from './SVGIcon/AccountsIcon'
// import LockIcon from './SVGIcon/LockIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Sidebar = () => {
  const path = usePathname();

  const dashboardPath = `/business/dashboard`
  const reviewsPath = `/business/dashboard/review-board`
  const subscriptionsPath = `/business/dashboard/subscription`
  const accountsPath = `/business/dashboard/account`
  const isActive = (route) => path === route;
  return (
    <div className={styles?.sidebarContainer}>
      <div className={styles?.sidebarLogo}>
        <Image src={`/Logo`} alt='TrustPiple' height={30} width={90} />
      </div>
      <ul className={styles?.sidebarLinks}>
        <li className={`${styles?.sidebarLink} ${isActive(dashboardPath) && styles?.active} `}>
          <Link href='/business/dashboard'>  Dashboard</Link>
        </li>
        <li className={`${styles?.sidebarLink} ${isActive(reviewsPath) && styles?.active}`}>
          <Link href='/business/dashboard/review-board'> Manage Reviews</Link>
        </li>
        <li className={`${styles?.sidebarLink} ${isActive(subscriptionsPath) && styles?.active}`}>
          <Link href='/business/dashboard/subscription'>  Subscriptions</Link>
        </li>
        <li className={`${styles?.sidebarLink} ${isActive(accountsPath) && styles?.active}`}>
          <Link href='/business/dashboard/account'>Accounts</Link>
        </li>
      </ul>

      <div className={`${styles?.sidebarLogoutButton}`}>
        <Link href='#'> Logout</Link>

      </div>
    </div>
  )
}

const SidebarMobile = ({ closing }) => {
  const path = usePathname();

  const dashboardPath = `/business/dashboard`
  const reviewsPath = `/business/dashboard/review-board`
  const subscriptionsPath = `/business/dashboard/subscription`
  const accountsPath = `/business/dashboard/account`
  const isActive = (route) => path === route;
  return (
    <div>
      <div className={`${styles?.sidebarMobileContainer} ${closing && styles.active}` }>
        <div className={styles?.sidebarMobileLogo}>
          <Image src={`/Logo`} alt='TrustPiple' height={30} width={90}/>
        </div>
        <ul className={styles?.sidebarMobileLinks}>
          <li className={`${styles?.sidebarMobileLink} ${isActive(dashboardPath) && styles?.active} `}>
            <Link href='/business/dashboard'>  Dashboard</Link>
          </li>
          <li className={`${styles?.sidebarMobileLink} ${isActive(reviewsPath) && styles?.active}`}>
            <Link href='/business/dashboard/review-board'> Manage Reviews</Link>
          </li>
          <li className={`${styles?.sidebarMobileLink} ${isActive(subscriptionsPath) && styles?.active}`}>
            <Link href='/business/dashboard/subscription'> Subscriptions</Link>
          </li>
          <li className={`${styles?.sidebarMobileLink} ${isActive(accountsPath) && styles?.active}`}>
            <Link href='/business/dashboard/account'>Accounts</Link>
          </li>
        </ul>

        <div className={`${styles?.sidebarMobileLogoutButton}`}>
          <Link href='#'>Logout</Link>

        </div>
      </div>
      <div className={styles?.bgSidebar} onClick={closing}>

      </div>
    </div>
  )
}

export { Sidebar, SidebarMobile }