import React from 'react'
import styles from './heading.module.scss'

const Heading = ({text}) => {
  return (
    <div className={styles?.heading}>{text}</div>
  )
}

export default Heading