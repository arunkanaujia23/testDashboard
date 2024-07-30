import React from 'react'
import styles from './dashboardHome.module.scss'
import DashboardLayout from '../Dashboard/DashboardLayout/DashboardLayout'
import Heading from '../Common/Heading/Heading'
import StatsCard from '../Common/StatsCard/StatsCard'
import TableData from './TableData/TableData'

const DashboardHome = () => {
    return (
        <DashboardLayout>
            <div className={styles?.contentContainer}>
                <Heading text={`Account Overview`} />
                <div className={styles?.cardListContainer}>
                    <StatsCard heading={`Checking Account`} amount={`50000`} />
                    <StatsCard heading={`Saving Account`} amount={`50000`} />
                    <StatsCard heading={`Credit Card`} amount={`50000`} />
                </div>
            </div>

            <div className={styles?.contentContainer}>
                <Heading text={`Recent Transactions`} />
                <TableData/>
            </div>
            <div className={styles?.contentContainer}>
                <Heading text={`Spending Categories`} />
                  
            </div>
        </DashboardLayout>

    )
}

export default DashboardHome