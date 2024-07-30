import React from 'react'
import styles from './tableData.module.scss'
// fl-table
const TableData = () => {
  return (
    <table className={styles?.table}>
  <thead>
    <tr>
      <th>Date</th>
      <th>Description</th>
      <th>Amount</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01/11/2023</td>
      <td>Grocery Store</td>
      <td>$ 1500</td>
     
    </tr>

    <tr>
      <td>01/11/2023</td>
      <td>Grocery Store</td>
      <td>$ 1500</td>
     
    </tr>
    <tr>
      <td>01/11/2023</td>
      <td>Grocery Store</td>
      <td>$ 1500</td>
     
    </tr>
  </tbody>
  <tbody></tbody>
</table>

  )
}

export default TableData