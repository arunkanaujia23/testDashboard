'use client'
import React, { Children, useState } from 'react'
import styles from './dashboardLayout.module.css'
import { Sidebar, SidebarMobile } from '../Sidebar/Sidebar'
// import  { Sidebar, SidebarMobile } from '../BusinessComponent/Sidebar/Sidebar'
// const Sidebar = () => (`SideBar`)
// const SidebarMobile = () => (`SidebarMobile`)


const DashboardLayout = ({ children }) => {

    const [showSideBar, setShowSideBar] = useState(true)

    const handleToggleSideBar = () => {
        setShowSideBar(!showSideBar);
    }
    return (
        <div className={styles?.dashboardLayoutContainer}> 
          
            {showSideBar ? <Sidebar />  :  <SidebarMobile closing={handleToggleSideBar} />}
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardTopbar}>
                    <div className={styles?.menuButtonAndTitle}>
                        <div className={styles?.menuButton} onClick={handleToggleSideBar}>|||</div>
                        <div className={styles.brandTitle}>Fareskhalifa.com</div>
                    </div>

                    <div className={styles.topButtonContainer}>


                        <div className={styles.topButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_3105_1776)">
                                    <path d="M10.8868 15C10.8868 16.6569 9.54355 18 7.88667 18C6.2298 18 4.88672 16.6569 4.88672 15C4.88672 13.3432 6.2298 11.9999 7.88667 11.9999C9.54355 11.9999 10.8868 13.3432 10.8868 15Z" fill="#00B67A" />
                                    <path d="M13.1427 8.94083C10.6002 8.57773 8.63676 6.39145 8.63676 3.75006C8.63676 2.99997 8.79716 2.28833 9.08144 1.64247C8.69746 1.55252 8.29852 1.50006 7.88667 1.50006C4.99178 1.50006 2.63672 3.85498 2.63672 6.75002V8.84099C2.63672 10.3252 1.98647 11.7263 0.845673 12.6907C0.553986 12.9397 0.386719 13.3035 0.386719 13.6875C0.386719 14.4113 0.975449 15.0001 1.69917 15.0001H14.0742C14.798 15.0001 15.3868 14.4113 15.3868 13.6875C15.3868 13.3035 15.2195 12.9397 14.9203 12.684C13.8132 11.7473 13.1712 10.3875 13.1427 8.94083Z" fill="#00B67A" />
                                    <path d="M17.6368 3.75005C17.6368 5.82111 15.9578 7.49995 13.8868 7.49995C11.8157 7.49995 10.1367 5.82111 10.1367 3.75005C10.1367 1.67899 11.8157 0 13.8868 0C15.9578 0 17.6368 1.67899 17.6368 3.75005Z" fill="#FF9737" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3105_1776">
                                        <rect width={18} height={18} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className={styles.topButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_3105_1782)">
                                    <path d="M9.00009 9.37517C10.5858 9.37517 11.8713 8.0897 11.8713 6.50399C11.8713 4.91828 10.5858 3.63281 9.00009 3.63281C7.41438 3.63281 6.12891 4.91828 6.12891 6.50399C6.12891 8.0897 7.41438 9.37517 9.00009 9.37517Z" fill="#00B67A" />
                                    <path d="M14.1393 13.7349V15.2595C12.7407 16.4097 10.9497 17.0991 9.00032 17.0991C7.05092 17.0991 5.25992 16.4097 3.86133 15.2595V13.7349C3.86133 12.2175 5.09252 10.9863 6.61172 10.9863H11.3889C12.9081 10.9863 14.1393 12.2175 14.1393 13.7349Z" fill="#00B67A" />
                                    <path d="M9.00019 17.5492C4.28569 17.5492 0.450195 13.7137 0.450195 8.99922C0.450195 4.28471 4.28569 0.449219 9.00019 0.449219C13.7147 0.449219 17.5502 4.28471 17.5502 8.99922C17.5502 13.7137 13.7147 17.5492 9.00019 17.5492ZM9.00019 1.17688C4.687 1.17688 1.17786 4.68602 1.17786 8.99922C1.17786 13.3124 4.687 16.8216 9.00019 16.8216C13.3134 16.8216 16.8225 13.3124 16.8225 8.99922C16.8225 4.68602 13.3134 1.17688 9.00019 1.17688Z" fill="#00B67A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3105_1782">
                                        <rect width={18} height={18} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>
                <div className={styles.dashboardContent}>{children}</div>       
                <div>BottomBar</div>    
            </div>

        </div>
    )
}

export default DashboardLayout