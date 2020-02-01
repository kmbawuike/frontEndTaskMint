import React, {Fragment } from 'react'
import { MdSettingsOverscan } from 'react-icons/md'
import { AiOutlineWallet} from 'react-icons/ai'
import {FaDotCircle} from 'react-icons/fa'
import {TiContacts} from 'react-icons/ti'
import {FiUser} from 'react-icons/fi'
const SideBar = () => {
  const payments = [
    { type: 'All Payments', icon: <AiOutlineWallet className="icon" />},
    { type: 'Reconcilled Payments', icon: <AiOutlineWallet className="icon"/>},
    { type: 'Un Reconcilled Payments', icon: <AiOutlineWallet className="icon" />},
    { type: 'Manual Settlements', icon: <FaDotCircle className="icon"/> }
  ]
  const orders = [
    { type: 'All Orders', icon: <TiContacts className="icon" /> },
    { type: 'Reconcilled Payments', icon: <TiContacts className="icon" /> },
    { type: 'Un Reconcilled Payments', icon: <TiContacts className="icon" /> }
  ]

  return (
    <Fragment>
      <aside className="sidebar-container">
        <section className="overview-section">
          <button>GENERATE INVOICE</button>
          <h2>Main</h2>
          <div className="overview overview-color">
            <MdSettingsOverscan className="icon" />
            <h3>Overview</h3>
          </div>
        </section>

        <section className="payment-section">
          <h2 className="special-heading">Payments</h2>
          {payments.map((payment)=>(
            <div className="overview">
              {payment.icon}
              <h3>{payment.type}</h3>
            </div>
          ))}
        </section>

        <section className="order-section">
          <h2 className="special-heading">Orders</h2>
          {orders.map((order)=>(
            <section className="overview">
              {order.icon}
              <h3>{order.type}</h3>
            </section>
          ))}
        </section>

        <section className="overview merchant">
          <FiUser className="icon" />
          <h3>Merchant Profile</h3>
        </section>

      </aside>
    </Fragment>
  )
}

export default SideBar;