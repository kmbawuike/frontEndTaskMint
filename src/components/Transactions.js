import React, {Fragment} from 'react'

const Transactions = ()=>{
  const transactions = [
    { type: 'Daily Transaction Volume', amount: '2,342' },
    { type: 'Daily Transaction Value', amount: '₦4,000,000' },
    { type: 'Total Transaction Volume', amount: '452,000' },
    { type: 'Total Transaction Value', amount: '₦4,000,000' }
  ]
  return(
    <Fragment>
      <section className="transaction-container">
        {transactions.map((item) => (
          <div className="transaction">
            <p>Daily Transaction Volume<br /><span className="transaction-amount">₦4,000,000</span></p>
            <div className="svg-container">
              <svg
                width="64"
                height="21"
                viewBox="0 0 64 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1"
                  stroke="#0294FF"
                />
              </svg>
            </div>

          </div>
        ))}

      </section>
    </Fragment>
  )
}

export default Transactions;