import React, { Fragment } from 'react';
import Payment from '../components/Payment'
import TableData from '../components/TableData'
const Table = (props) => {
  return (
    <Fragment>
      <Payment />
      <table>
        <tr>
          <th>Item Type</th>
          <th>Price</th>
          <th>Transaction No</th>
          <th>Time</th>
        </tr>
        <TableData status="Reconcilled" color="#27AE60"/>
        <TableData status="Pending" color="#EBC315" />
        <TableData status="Reconcilled" color="#27AE60" />
        <TableData status="Reconcilled" color="#27AE60" />
        <TableData status="Pending" color="#EBC315" />
        <TableData status="Un-reconcilled" color="#7F8FA4" />
        <TableData status="Reconcilled" color="#27AE60" />
        <TableData status="Un-reconcilled" color="#7F8FA4" />
        <TableData status="Pending" color="#EBC315" />

      </table>
    </Fragment>
  )
}

export default Table;