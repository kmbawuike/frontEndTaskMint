import React, {Fragment} from 'react'

const ChartRange = (props)=>{
  return(
    <Fragment>
      <div className="orders-container">
        <h3 className="order">{props.type}</h3>
        <div className="order-progress">
          <div className="eighty-percent"></div>
          <div className="twenty-percent"></div>
        </div>
        <p>{props.order1}: <span className="twenty-percent-yellow">20</span></p>
        <p>{props.order2}: <span className="twenty-percent-green">80</span></p>
        <p>Total Orders: <span className="total-blue">100</span></p>
      </div>
    </Fragment>
  )
}

export default ChartRange