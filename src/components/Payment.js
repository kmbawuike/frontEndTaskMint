import React, { Fragment } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io'

const Payment = () => {
  return (
    <Fragment>
      <div className="payment-container">
        <h1>Payments</h1>

        <div className="payment-table">
          <div className="payment">
            <p className="payment-child">Showing</p>
            <div className="payment-number payment-child">
              <span>20</span>
              <MdKeyboardArrowDown className="payment-icon" />
            </div>
          </div>

          <div className="payment-search-button-container">
            <div className="payment-search-container">
              <button><IoIosSearch className="payment-search-icon" /></button>
              <input className="payment-search" placeholder="Search..." autoFocus />
            </div>

            <div>
              <h4>Show</h4>
              
            </div>
          </div>


        </div>
      </div>

    </Fragment>
  )
}
export default Payment;