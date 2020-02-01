import React, {Fragment} from 'react';
import { IoIosArrowDown } from 'react-icons/io'
const TableData =(props)=>{
  return(
    <Fragment>
      <tr>
        <td className="item-type">
          <div className="item-circle">VW</div>
          <span>Apple Mac Book 15” 250 SSD 12GB</span>
        </td>
        <td>$73430</td>
        <td>1234567890</td>
        <td className="special-item-type">
          <span className="time">12:20</span>
          <div className="pending-container">
            <span className="pending-circle" style={{background: `${props.color}`}}></span>
            <span className="pending-text" style={{color: `${props.color}`}}>{props.status}</span>
          </div>
          <IoIosArrowDown className="pending-arrow" />

        </td>
      </tr>
    </Fragment>
  )
}

export default TableData