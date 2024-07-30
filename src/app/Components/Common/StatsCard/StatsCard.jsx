import React from 'react'
import styles from './statsCard.module.scss'

const StatsCard = ({heading, amount}) => {
  return (
    <div className={styles?.card}>
        <div className={styles?.heading}>{heading}</div>
        <div className={styles?.price}>Balance: {amount}</div>
    </div>
  )
}

export default StatsCard